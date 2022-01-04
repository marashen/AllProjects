using System;
using System.Collections.Generic;
using System.Threading;
using System.Linq;


namespace Equations
{
    class Program
    {
        static void Main(string[] args)
        {
            double health = 0;
            int round = 1;
            while (health <= 125000)
            {
                double dmgrec = 1800 / round;
                double dmgmulti = dmgrec / 100;
                health = 1000 + (50 * (round - 10) + (Math.Pow(1.65, round - 10)) + (11 * ((round - 14) * 3.65)));
                Console.WriteLine("Round " + round + " " + health);
                basedmg(health, dmgmulti);
                health = 1000 + (50 * (round - 10) + (Math.Pow(1.65, round - 10)) + (11 * ((round - 14) * 3.65)));
                boostdmg(health, dmgmulti);
                health = 1000 + (50 * (round - 10) + (Math.Pow(1.65, round - 10)) + (11 * ((round - 14) * 3.65)));
                Thread.Sleep(1500);
                round += 1;
            }
        }
        static void basedmg(double health, double dmgmulti)
        {
            int firerate = 20;
            int bps = 20;
            double fps = .05;
            int dps = 85;
            double dmgbase = 12;
            double elasped = 0;
            int rounds = 0;
            while (health >= 1)
            {
                while (firerate > 0)
                {
                    health = health - ((dmgmulti * (dps * dmgbase)) / firerate);
                    rounds++;
                    firerate--;
                    if (health <= 0)
                    {
                        firerate = 0;
                    }
                }
                elasped = rounds * fps;
                firerate = bps;
            }
            Thread.Sleep(100);
            Console.WriteLine("-    STK base = " + rounds + " round(s) fired.");
            Thread.Sleep(250);
            Console.WriteLine("-    TTK base = " + elasped + " second(s) to kill.");
            Thread.Sleep(250);
        }
        static void boostdmg(double health, double dmgmulti)
        {
            int firerate = 20;
            int bps = 20;
            double fps = .05;
            int dps = 85;
            double dmgboost = 36;
            double elasped = 0;
            int rounds = 0;
            while (health >= 1)
            {
                while (firerate > 0)
                {
                    health = health - ((dmgmulti * (dps * dmgboost)) / firerate);
                    rounds++;
                    firerate--;
                    if (health <= 0)
                    {
                        firerate = 0;
                    }
                }
                elasped = rounds * fps;
                firerate = bps;
            }
            Thread.Sleep(100);
            Console.WriteLine("-    STK boost = " + rounds + " round(s) fired.");
            Thread.Sleep(250);
            Console.WriteLine("-    TTK boost = " + elasped + " second(s) to kill");
            Thread.Sleep(250);
            Console.WriteLine("");
        }
    }
}
