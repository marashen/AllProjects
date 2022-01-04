using System;
using System.Collections.Generic;
using System.Threading;
using System.Linq;

int looper = 1;
while (looper == 1)
{
    Console.WriteLine("Only use whole numbers!");
    Thread.Sleep(1500);
    Console.WriteLine("And don't divide by Zero!");
    Thread.Sleep(1500);
    try
    {
        Console.WriteLine("How old are you?");
        string inputIn1 = Console.ReadLine();
        int inputOut1 = Convert.ToInt32(inputIn1);
        Console.WriteLine("What is your favorite number?");
        string inputIn2 = Console.ReadLine();
        int inputOut2 = Convert.ToInt32(inputIn2);
        Console.WriteLine("What Month is your birthday?");
        string inputIn3 = Console.ReadLine();
        int inputOut3 = Convert.ToInt32(inputIn3);
        List<int> divider = new List<int>(12);
        divider.Add(inputOut1);
        divider.Add(inputOut2);
        divider.Add(inputOut3);
        Console.Write("Pick any number: ");
        string inputIn4 = Console.ReadLine();
        int inputOut4 = Convert.ToInt32(inputIn4);
        foreach (int i in divider)
        {
            Console.WriteLine("-   " + i / inputOut4);
            Thread.Sleep(1000);
        }
        looper += 1;
    }
    catch (FormatException ex)
    {
        Console.WriteLine("Foolish.");
    }
    catch (DivideByZeroException ex)
    {
        Console.WriteLine("Extra Foolish");
    }
    finally
    {
        Thread.Sleep(2000);
        if (looper == 1)
        {
            Console.WriteLine("Tell the program you are sorry for disobeying the rules.");
            Console.ReadLine();
        }
        else
        {
            Console.WriteLine("You did it.");
        }
    }
}
