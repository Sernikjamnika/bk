# author: Mateusz Walczak
function relative_error(x_1, x_2)
    """
    Calculates relative error of `x_1` and `x_2`

    # Arguments
    - `x_1::Array`: n x m - dimentional array
    - `x_2::Array`: n x m - dimentional array
    """
    return abs(norm(x_2 - x_1) / norm(x_1))
end

function Gauss_eliminaton(A, b)
    """
    Calculates the Gauss elimination

    # Arguments
    - `A::Array`: n x m - dimentional array
    - `b::Array`: m x n - dimentional array
    """
    return A \ b
end

function hilb(n::Int)
    # Function generates the Hilbert matrix  A of size n,
    #  A (i, j) = 1 / (i + j - 1)
    # Inputs:
    #	n: size of matrix A, n>=1
    #
    #
    # Usage: hilb (10)
    #
    # Pawel Zielinski
    if n < 1
        error("size n should be >= 1")
    end
    return [1 / (i + j - 1) for i in 1:n, j in 1:n]
end
    
function matcond(n::Int, c::Float64)
    # Function generates a random square matrix A of size n with
    # a given condition number c.
    # Inputs:
    #	n: size of matrix A, n>1
    #	c: condition of matrix A, c>= 1.0
    #
    # Usage: matcond (10, 100.0);
    #
    # Pawel Zielinski
    if n < 2
        error("size n should be > 1")
    end
    if c < 1.0
        error("condition number  c of a matrix  should be >= 1.0")
    end
    (U,S,V)=svd(rand(n,n))
    return U*diagm(linspace(1.0,c,n))*V'
end

n_s = [5, 10, 20]
c_s = [1., 10., 10.^3, 10.^7, 10.^12, 10.^16]

println("a)")
for n in 1:20
    # create the real result
    x = [1 for _ in 1:n]
    # create Hilbert's matrix
    A = hilb(n)
    b = A * x
    # use 2 algorithms to calculate x
    x_1 = Gauss_eliminaton(A, b)
    x_2 = inv(A) * b
    println("$n & $(rank(A)) & $(cond(A)) & $(relative_error(x, x_2)) & $(relative_error(x, x_1)) \\\\")
end

println("b)")
for n in n_s
    for c in c_s
        # create the real result
        x = [1 for _ in 1:n]
        # generate random matrix with given cond
        A = matcond(n, c)
        b = A * x
        # use 2 algorithms to calculate x
        x_1 = Gauss_eliminaton(A, b)
        x_2 = inv(A) * b
        println("\$$n\$ & \$$(rank(A))\$ & \$$c\$ & \$$(relative_error(x, x_2))\$ & \$$(relative_error(x, x_1))\$ \\\\")
    end
end
