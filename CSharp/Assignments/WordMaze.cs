using System;
using System.Threading;
using System.Collections.Generic;
using System.Linq;

int limiter = 0;
List<string> allanswers = new List<string>(10);
string[] moons = { "Luna", "Titan", "Ganymede", "Io" };
int looper = 1;
Console.WriteLine("Are you ready to begin? Enter yes to continue.");
string userInit = Console.ReadLine();
allanswers.Add(userInit);
if (userInit == "yes")
{
    Console.WriteLine("Evalution Program will begin in 5");
    Thread.Sleep(1000);
    Console.WriteLine("4");
    Thread.Sleep(1000);
    Console.WriteLine("3");
    Thread.Sleep(1000);
    Console.WriteLine("2");
    Thread.Sleep(1000);
    Console.WriteLine("1");
}
else
{
    Console.WriteLine("You're off to a great start! I know yes can be hard to spell so goodluck!");
    limiter += 1;
}

while (looper == 1)
{
    Console.Write("Would you like to see your previous answers? Enter yes and only yes if so.");
    string userAll = Console.ReadLine();
    if (userAll == "yes")
    {
        foreach (string i in allanswers)
        {
            Console.WriteLine("-   " + i);
        }
    }
    else
    {
        if (limiter == 0)
        {
            Console.WriteLine("Are you okay? It's just y e s.");
        }
        else if (limiter == 1)
        {
            Console.WriteLine("Really? Don't you want to keep track?");
        }
        else if (limiter == 2)
        {
            Console.WriteLine("No way you've mistyped yes this many times");
        }
        else if (limiter == 3)
        {
            Console.WriteLine("Mmmk, lets go through our basic alphabet.");
            Thread.Sleep(5000);
            Console.WriteLine("I changed my mind.");
        }
        else if (limiter == 4)
        {
            Console.WriteLine("https://www.youtube.com/watch?v=w_-lz2BI2Co");
            Console.WriteLine("That's a link to a helpful guide on the Alphabet! I hope it will help.");
            Thread.Sleep(10000);
            Console.WriteLine("If you're still here you better go watch that video this program will sleep for the next 3 minutes.");
            Thread.Sleep(15000);
            Console.WriteLine("abc's yes.");
        }
        else
        {
            Console.WriteLine("Enough.");
            looper += 1;
        }
        limiter += 1;
    }
    Console.Write("Do you like the Moon?");
    string userIndex = Console.ReadLine();
    allanswers.Add(userIndex);
    foreach (string i in moons)
    {
        Console.WriteLine(userIndex + " " + i);
    }
    if (userIndex.Length > 1)
    {
        if (userIndex == "yes" || userIndex == "Yes")
        {
            Console.WriteLine(moons[0] + " is Luna! Yes. Luna is Luna!");
        }
        else if (userIndex == "no" || userIndex == "No")
        {
            Console.WriteLine(moons[1] + " is Titan! why'd you say no .");
        }
        else if (userIndex == "yeah" || userIndex == "Yeah")
        {
            Console.WriteLine(moons[2] + " is Ganymede! YEAH YA");
        }
        else if (userIndex == "Nope" || userIndex == "nope" || userIndex == "horrible dog" || userIndex == "terrible monster")
        {
            Console.WriteLine(moons[2] + "is Io, prompts for this include horrible dog and terrible monster");
        }
        else
        {
            Console.WriteLine(userIndex + " is not an answer I am familiar with.");
            Thread.Sleep(3000);
            Console.Write("Is " + userIndex + " a real answer?");
            string userHelp = Console.ReadLine();
            allanswers.Add(userHelp);
            if (userHelp == "yes" || userHelp == "Yes" || userHelp == "Yeah" || userHelp == "yeah" || userHelp == "ya" || userHelp == "Ya" || userHelp == "yea" || userHelp == "Yea" || userHelp == "yur" || userHelp == "Yur")
            {
                Console.WriteLine("Are you serious?");
                Thread.Sleep(2500);
                Console.Write("Why?");
                string userAns = Console.ReadLine();
                allanswers.Add(userAns);
                Thread.Sleep(1500);
                Console.WriteLine("Alright");
                Thread.Sleep(1000);
                Console.Write(userAns + " is kind of odd. but my favorite");
            }
            else if (userHelp == "no" || userHelp == "No" || userHelp == "Nope" || userHelp == "nope" || userHelp == "nah" || userHelp == "Nah")
            {
                
                Console.WriteLine("Mars has");
                Thread.Sleep(2500);
                Console.Write("Two moons ");
                Thread.Sleep(1500);
                Console.Write("called Phobos and Deimos ");
                Thread.Sleep(1000);
                Console.Write("aka Fear and Dread. nice. ");
            }
            else if (userHelp == "maybe" || userHelp == "Maybe" || userHelp == "perhaps" || userHelp == "Perhaps" || userHelp == "mb" || userHelp == "mb")
            {
                Console.WriteLine("What do you mean maybe?");
                Thread.Sleep(2500);
                Console.Write("Actually it doesn't matter.");
                Thread.Sleep(1500);
                Console.WriteLine("Be more decisive next time.");
                Thread.Sleep(1000);
                Console.Write("What is your favorite color?");
                string userColor = Console.ReadLine();
                allanswers.Add(userColor);
                if (userColor == "Red" || userColor == "red")
                {
                    Console.WriteLine("If time is infinite..");
                    Thread.Sleep(5000);
                    Console.Write("are we alive?");
                    string userExist = Console.ReadLine();
                    allanswers.Add(userExist);
                    if (userExist == "yes" || userExist == "Yes")
                    {
                        Console.WriteLine("I mean time will eventually go on for so long that it will make itself meaningless.");
                        Thread.Sleep(1500);
                        Console.WriteLine("But I admire your optimism.");
                    }
                    else if (userExist == "idk" || userExist == "Idk")
                    {
                        Console.WriteLine("Whatever.");
                    }
                    else
                    {
                        Console.WriteLine("I don't feel like responding to ' " + userExist + " ' right now, but I probably won't later.");
                    }
                }
                else
                {
                    Console.WriteLine("You know what sucks about " + userColor + "?");
                    Console.ReadLine();
                    Console.WriteLine("hmm");
                    Thread.Sleep(2000);
                    Console.WriteLine("Mars is red!");
                }
            }
            else
            {
                Console.WriteLine("Incredible");
                Thread.Sleep(2000);
                Console.WriteLine(userHelp + userIndex + " makes a dull program a sad program.");
            }

        }
        Console.WriteLine("You have answered foolishly.");

    }
    else if (userIndex.Length == 1)
    {
        int conIndex = Convert.ToInt32(userIndex);
        if (conIndex >= 0 && conIndex <= 3)
        {
            Console.WriteLine(moons[conIndex]);
            looper -= 1;
        }
        else
        {
            Console.WriteLine("Please pick a whole number between 0 and 3!");
        }
    }
}
