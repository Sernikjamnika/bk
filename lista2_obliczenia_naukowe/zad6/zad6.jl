# author: Mateusz Walczak
using PyPlot


function equation(x, c)
    return x = x^2.0 + c
end

c_s = Float64[-2., -2., -2., -1., -1., -1., -1.]
x_s = Float64[1., 2., 1.99999999999999, 1., -1., 0.75, 0.25]


for k in 1:40
    # show number of iteration
    print("\$$k\$")
    # make iteration step for every experiment
    # and show the results
    for (index, (x, c)) in enumerate(zip(x_s, c_s))
        x_s[index] = equation(x, c)
        print(" & \$$(x_s[index])\$")
    end
    println("\\\\")
end
