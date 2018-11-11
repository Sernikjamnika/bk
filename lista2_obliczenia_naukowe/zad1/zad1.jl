# author: Mateusz Walczak
function forward_sum(x_addends, y_addends)
    """
    Calculates dot product of two vectors
    taking elements from the begining of 
    arrays.

    # Arguments
    - `x_addends::Array`: vector
    - `y_addends::Array`: vector
    """
    result = 0
    # takes elements from the begining of arrays
    for (x_addend, y_addend) in zip(x_addends, y_addends)
        result += x_addend * y_addend
    end

    return result
end

function backward_sum(x_addends, y_addends)
    """
    Calculates dot product of two vectors
    taking elements from the end of 
    arrays.

    # Arguments
    - `x_addends::Array`: vector
    - `y_addends::Array`: vector
    """
    result = 0
    # reverses vector to take vectors' elements
    # from the end
    x_addends = reverse(x_addends)
    y_addends = reverse(y_addends)

    for (x_addend, y_addend) in zip(x_addends, y_addends)
        result += x_addend * y_addend
    end

    return result
end

function greater_to_smaller_sum(x_addends, y_addends)
    """
    Calculates dot product of two vectors.
    Fristly multiplies elements of one vector coresponding 
    to elements from the second one.
    Divides the results into greater and lesser than 0.
    Sorts greater and lesser respectively descending and ascending.
    Adds positive and negative seperately.
    At the end adds sum of greater than 0 and lesser.

    # Arguments
    - `x_addends::Array`: vector
    - `y_addends::Array`: vector
    """
    addends = [x * y for (x, y) in zip(x_addends, y_addends)]
    # divide into positive, negative
    # sort descending 
    addends_postive = sort([x for x in addends if x > 0], rev=true)
    # sort ascending
    addends_negative = sort([x for x in addends if x < 0])
    result_positive, result_negative = 0, 0

    # add positive and negative seperately
    for addend_postive in addends_postive
        result_positive += addend_postive
    end

    for addend_negative in addends_negative
        result_negative += addend_negative

    end

    # sum up the results
    return result_positive + result_negative
end

function smaller_to_greater_sum(x_addends, y_addends)
    """
    Calculates dot product of two vectors.
    Fristly multiplies elements of one vector coresponding 
    to elements from the second one.
    Divides the results into greater and lesser than 0.
    Sorts greater and lesser respectively ascending and descending.
    Adds positive and negative seperately.
    At the end adds sum of greater than 0 and lesser.

    # Arguments
    - `x_addends::Array`: vector
    - `y_addends::Array`: vector
    """
    addends = [x * y for (x, y) in zip(x_addends, y_addends)]
    # divide into positive, negative
    # sort ascending
    addends_postive = sort([x for x in addends if x > 0])
    # sort descending 
    addends_negative = sort([x for x in addends if x < 0], rev=true)
    result_positive, result_negative = 0, 0


    # add positive and negative seperately
    for addend_postive in addends_postive
        result_positive += addend_postive

    end

    for addend_negative in addends_negative
        result_negative += addend_negative
    end

    # sum up the results
    return result_positive + result_negative
end

# changed data
x = [2.718281828, -3.141592654, 1.414213562, 0.577215664, 0.301029995]
y = [1486.2497, 878366.9879, -22.37492, 4773714.647, 0.000185049]

x2 = [Float32(element) for element in x]
y2 = [Float32(element) for element in y]

println("a) Float64: ", forward_sum(x, y), " Float32: ", forward_sum(x2, y2))
println("b) Float64: ", backward_sum(x, y), " Float32: ", backward_sum(x2, y2))
println("c) Float64: ", greater_to_smaller_sum(x, y), " Float32: ", greater_to_smaller_sum(x2, y2))
println("d) Float64: ", smaller_to_greater_sum(x, y), " Float32: ", smaller_to_greater_sum(x2, y2))
