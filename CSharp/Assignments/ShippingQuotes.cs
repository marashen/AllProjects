using System;

int looper = 1;
while (looper == 1)
{
    Console.WriteLine("Welcome to Package Express!");
    Console.Write("Please Enter the Package Weight:");
    string weightIn = Console.ReadLine();
    int weightOut = Convert.ToInt32(weightIn);
    if (weightOut > 50)
    {
        Console.WriteLine("To Heavy!!!");
    }
    else
    {
        Console.Write("Please Enter the Package Width:");
        string widthIn = Console.ReadLine();
        int widthOut = Convert.ToInt32(widthIn);
        if (widthOut > 40)
        {
            Console.WriteLine("To Wide!!!");
        }
        else
        {
            Console.Write("Please Enter the Package Height:");
            string heightIn = Console.ReadLine();
            int heightOut = Convert.ToInt32(heightIn);
            if (heightOut > 55)
            {
                Console.WriteLine("To Tall!!!");
            }
            else
            {
                Console.Write("Please Enter the Package Length:");
                string lengthIn = Console.ReadLine();
                int lengthOut = Convert.ToInt32(heightIn);
                if (lengthOut > 55)
                {
                    Console.WriteLine("To Long!!!");
                }
                else
                {
                    int tpt = heightOut * lengthOut * widthOut * weightOut;
                    int quote = tpt / 100;
                    Console.WriteLine("Your estimated total is: $" + quote);
                    looper -= 1;
                }
            }
        }
    }
}
