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
            Console.WriteLine("The Program is about to being.");
            Console.WriteLine("Please only input whole numbers!");
            Thread.Sleep(2000);
            double health = 0;
            int round = 1;
            Console.Write("Please enter Players desired Firerate, or how many bullets per second they will fire. Recommended ranges are between 1-20. (whole numbers only): ");
            string firerateIn = Console.ReadLine();
            double firerate = Convert.ToInt32(firerateIn);
            double bps = firerate;
            double fps = 1 / firerate;
            Thread.Sleep(1000);
            Console.Write("Please enter Players desired Damage per Second. Recommended ranges are between 40-200. (whole numbers only): ");
            string dpsIn = Console.ReadLine();
            int dps = Convert.ToInt32(dpsIn);
            Thread.Sleep(1000);
            Console.Write("Please enter Players desired Base Damage Multiplier. Recommended ranges are between 1-50. (whole numbers only): ");
            string dmgbaseIn = Console.ReadLine();
            double dmgbase = Convert.ToInt32(dmgbaseIn);
            Thread.Sleep(1000);
            Console.Write("Please enter Players desired Upgraded Damage Multiplier. Recommended ranges are between 12-1500. (whole numbers only): ");
            string dmgboostIn = Console.ReadLine();
            double dmgboost = Convert.ToInt32(dmgboostIn);
            Thread.Sleep(1000);
            Console.Write("Please enter Players desired Enemy Health Regression. Recommended ranges are between 100 & 200. The closer to 200, the faster Enemies gain Health. (whole numbers only): ");
            string hpsIn = Console.ReadLine();
            double hpsWhole = Convert.ToInt32(hpsIn);
            double hps = hpsWhole * .01;
            Thread.Sleep(1000);
            Console.Write("Please enter the desired Program Speed you wish to run. Enter a Value between 100 & 3000. (whole numbers only): ");
            string timersIn = Console.ReadLine();
            int timers = Convert.ToInt32(timersIn);
            Thread.Sleep(1000);

            while (health <= 125000)
            {
                double dmgrec = 1800 / round;
                double dmgmulti = dmgrec / 100;
                health = 1000 + (50 * (round - 10) + (Math.Pow(hps, round - 10)) + (11 * ((round - 14) * 3.65)));
                Console.WriteLine("Round " + round + " " + health);
                basedmg(health, dmgmulti, firerate, dps, dmgbase, fps, bps);
                health = 1000 + (50 * (round - 10) + (Math.Pow(hps, round - 10)) + (11 * ((round - 14) * 3.65)));
                boostdmg(health, dmgmulti, firerate, dps, dmgboost, fps, bps);
                health = 1000 + (50 * (round - 10) + (Math.Pow(hps, round - 10)) + (11 * ((round - 14) * 3.65)));
                Thread.Sleep(timers);
                round += 1;
            }
        }
        static void basedmg(double health, double dmgmulti, double firerate, int dps, double dmgbase, double fps, double bps)
        {
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
                Thread.Sleep(100);
                Console.WriteLine("-    TTK base = " + elasped + " second(s) to kill.");
                Thread.Sleep(100);            
        }
        static void boostdmg(double health, double dmgmulti, double firerate, int dps, double dmgboost, double fps, double bps)
        {
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
            Thread.Sleep(100);
            Console.WriteLine("-    TTK boost = " + elasped + " second(s) to kill");
            Thread.Sleep(100);
            Console.WriteLine("");
        }
    }
}
