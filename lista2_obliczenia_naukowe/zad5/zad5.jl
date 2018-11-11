# author: Mateusz Walczak


function population_growth(p, r)
    """
    Calculates growth of popluation.

    # Arguments: 
    - `p::AbstractFloat` - size of population / maximum size of population
    - `r::Number` - constant
    """
    return p + r * p * (1 - p)
end


p = Float32(0.01)
p_1 = Float32(0.01) 
p_2 = Float64(0.01)
r = 3
# calculate growth of population after 40 iterations
# for types - `Float32` and `Float64`
for i in 1:40
    p = population_growth(p, r)
    p_1 = population_growth(p_1, r)
    p_2 = population_growth(p_2, r)
    # for experiment 1. cut out all but three
    # first numbers after coma
    if i == 10
        p_1 = floor(p_1, 3)
    end
end

println("a) $p | $p_1")
println("b) Float32 $p | Float64 $p_2")
