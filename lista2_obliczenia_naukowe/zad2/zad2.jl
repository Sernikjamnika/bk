# author: Mateusz Walczak
using SymPy


# Sympy uses symbolic math
# so it can calculate exact value of the limit
x = Sym("x")
println("Limit of e^x * log(1 + e^(-x) with x approaching inifinity is $(limit(e^x * log(1 + e^(-x)), x, oo))")
