#include <emscripten.h>

extern "C"
{

    EMSCRIPTEN_KEEPALIVE
    int fibonacciWithRecursion(int n)
    {
        if (n == 0 || n == 1)
            return n;
        else
            return (fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2));
    }

    EMSCRIPTEN_KEEPALIVE
    int fibonacciWithLoop(int n)
    {
        if (n > 1)
        {
            int last = 0;
            int current = 1;
            int temp;

            for (int idx = 2; idx <= n; idx++)
            {
                temp = current;
                current = last + current;
                last = temp;
            }

            return current;
        }
        else
        {
            return n;
        }
    }
}