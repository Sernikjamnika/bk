# author: Mateusz Walczak
using Polynomials


# coefficients of polynomial
# reversed to create polynomial written in 
# exercise
coeffs = flipdim(Float64[1, -210.0, 20615.0,-1256850.0,
                  53327946.0,-1672280820.0, 40171771630.0,
                  -756111184500.0, 11310276995381.0, -135585182899530.0,
                  1307535010540395.0, -10142299865511450.0,63030812099294896.0,
                  -311333643161390640.0, 1206647803780373360.0, -3599979517947607200.0,
                  8037811822645051776.0, -12870931245150988800.0, 13803759753640704000.0, 
                  -8752948036761600000.0, 2432902008176640000.0], 1)

# create polynomial from given coefficients
polynomial_natural = Poly(coeffs)
# create same polynomial from formula
# p = (x-20)(x-19)..(x-1)
polynomial = poly(Float64[i for i in 1:20])
# get roots of `polymonial_natural`
polynomial_roots = flipdim(roots(polynomial_natural), 1)
# point a
println("a)")
for (index, root) in enumerate(polynomial_roots)
    # output `polynomial_natural` evaluation with root 
    # then `polynomial` evaluation
    # and difference between exact root and calculated one
    println("\$$root\$ & \$$(abs(polyval(polynomial_natural, root)))\$ & \$$(abs(polyval(polynomial, root)))\$ & \$$(abs(root - index))\$ \\\\")
end

println("b)")
# change lat-but-one coefficient
coeffs[length(coeffs) - 1] -=  2.0^(-23)
# create new `polynomial_natural` from changed coefficients
polynomial_natural = Poly(coeffs)
polynomial_roots = reverse(roots(polynomial_natural))
for (index, root) in enumerate(polynomial_roots)
    # output `polynomial_natural` evaluation with root 
    # then `polynomial` evaluation
    # and difference between exact root and calculated one
    println("\$$root\$ & \$$(abs(polyval(polynomial_natural, root)))\$ & \$$(abs(polyval(polynomial, root)))\$ & \$$(abs(root - index))\$ \\\\")
end
