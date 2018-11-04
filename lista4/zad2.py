from Crypto.Hash import SHA256
from Crypto.Cipher import AES
from Crypto import Random
from multiprocessing import Manager, Process, Pool
from itertools import product
from string import hexdigits
from time import time

def create_key(hash, secret):
    hash_object = hash.new()
    hash_object.update(secret)
    return hash_object.hexdigest()[:16]

def encrypt(key, mode, message):
    key = bytes(key.encode('utf-8'))
    iv = Random.new().read(AES.block_size)
    cipher = AES.new(key, mode, IV=iv)
    return iv, cipher.encrypt(bytes(message[:16].encode('utf-8')))

def decrypt(k2, IV, cryptogram, permutation):
    key = ''.join(permutation) + k2 
    decryptor = AES.new(key, AES.MODE_CBC, IV=IV)
    result = decryptor.decrypt(cryptogram).decode('utf-8', errors='replace') 
    return result


def try_to_decrypt(k2, alphabet, IV, cryptogram, message, num_cores=4):
    repeat = 16 - len(k2)
    results = []

    with Pool() as pool:
        for permutation in product(alphabet, repeat=repeat):
            res = pool.apply_async(decrypt, 
                            args=[k2, IV, cryptogram, permutation])
            results.append(res)
        for res in results:
            if res.get() == message:
                pool.terminate()
                return True
                
    return False


alphabet = '0123456789abcdef'
message = 'GoroncejamnikixD'
key = create_key(SHA256, 'jamniczek'.encode('utf-8'))
keys = ['0'*16, 'f'*16, '7'*16, '8'*16]

for i in range(1,6):
    average_time = 0
    for key in keys:
        k2 = key[i:]
        iv, cryptogram = encrypt(key, AES.MODE_CBC, message)
        start = time()
        try_to_decrypt(k2, alphabet, iv, cryptogram, message)
        finish = time() - start
        average_time += finish
        print(f'{i},{finish}')
    print(f'{i},{average_time / len(keys)}')