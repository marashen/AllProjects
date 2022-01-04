using System;
using System.Threading;

string[] mydogs = { "Yogi", "Sparky", "Lela", "Chewy" };
int looper = 1;
while (looper == 1)
{
    Console.Write("Select a Dog!");
    string userIndex = Console.ReadLine();
    if (userIndex.Length > 1)
    {
        if (userIndex == "Yogi" || userIndex == "yogi")
        {
            Console.WriteLine(mydogs[0] + "is index #0 but dog #1!");
        }
        else if (userIndex == "Sparky" || userIndex == "sparky")
        {
            Console.WriteLine(mydogs[1] + "is index #1 but dog #2!");
        }
        else if (userIndex == "Lela" || userIndex == "lela")
        {
            Console.WriteLine(mydogs[2] + "is index #2 but dog #3!");
        }
        else if (userIndex == "Chewy" || userIndex == "chewy" || userIndex == "horrible dog" || userIndex == "terrible monster")
        {
            Console.WriteLine(mydogs[2] + "is index #3 but this dog is horrible.");
        }
        else
        {
            Console.WriteLine(userIndex + " is not a dog I am familiar with, nor do I think lives in my home. I hope not..");
            Thread.Sleep(3000);
            Console.Write("Is " + userIndex + " in my home?");
            string userHelp = Console.ReadLine();
            if (userHelp == "yes" || userHelp == "Yes" || userHelp == "Yeah" || userHelp == "yeah" || userHelp == "ya" || userHelp == "Ya" || userHelp == "yea" || userHelp == "Yea" || userHelp == "yur" || userHelp == "Yur")
            {
                Console.WriteLine("Are you serious?");
                Thread.Sleep(2500);
                Console.Write("Why?");
                string userAns = Console.ReadLine();
                Thread.Sleep(1500);
                Console.WriteLine("Alright");
                Thread.Sleep(1000);
                Console.Write("Kind of odd but go ahead and just enter a listed dog yeah?");
            }
            else if (userHelp == "no" || userHelp == "No" || userHelp == "Nope" || userHelp == "nope" || userHelp == "nah" || userHelp == "Nah")
            {
                Console.WriteLine("Oh nice lol!");
                Thread.Sleep(2500);
                Console.Write("That would've been weird.");
                Thread.Sleep(1500);
                Console.WriteLine("Because I am super overtired");
                Thread.Sleep(1000);
                Console.Write("and don't know what I am writing here!");
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
                if (userColor == "Red" || userColor == "red")
                {
                    Console.WriteLine("If time is infinite..");
                    Thread.Sleep(5000);
                    Console.Write("are we alive?");
                    string userExist = Console.ReadLine();
                    if (userExist == "yes" || userExist == "Yes")
                    {
                        Console.WriteLine("I mean time will eventually go on for so long that it will make itself meaningless.");
                        Thread.Sleep(1500);
                        Console.WriteLine("But I admire your optimism.");
                    }
                    else if (userExist == "idk" || userExist == "Idk")
                    {
                        Console.WriteLine("Whatever, just go pick a dog.");
                    }
                    else
                    {
                        Console.WriteLine("I don't feel like responding to ' " + userExist + " ' right now, but I probably won't later so go pick a dog!");
                    }
                }
                else
                {
                    Console.WriteLine("You know what sucks about " + userColor + "?");
                    Console.ReadLine();
                    Console.WriteLine("hmm");
                    Thread.Sleep(2000);
                    Console.WriteLine("yeah i didn't bother even coding whatever you just wrote, because somehow you made it down here but didn't make it to just picking a dog index number.");
                }
            }
            else
            {
                Console.WriteLine("Incredible");
                Thread.Sleep(2000);
                Console.WriteLine("just pick a dog please.");
            }

        }
        Console.WriteLine("Please select a dog by Index Number next time!");
    }
    else if (userIndex.Length == 1)
    {
        int conIndex = Convert.ToInt32(userIndex);
        if (conIndex >= 0 && conIndex <= 3)
        {
            Console.WriteLine(mydogs[conIndex]);
            looper -= 1;
        }
        else
        {
            Console.WriteLine("Please pick a whole number between 0 and 3!");
        }
    }
}

int[] nums = { 1, 2, 3, 4 };
Console.WriteLine("Select Number!");
string userIndexStr = Console.ReadLine();
int userIndexInt = Convert.ToInt32(userIndexStr);
Console.WriteLine(nums[userIndexInt]);
