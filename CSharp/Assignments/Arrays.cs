string[] mydogs;
string[] mydogs = {"Yogi", "Sparky", "Lela", "Chewy"};
Console.WriteLine("Select Dog!");
int userIndex = Console.ReadLine();
Console.WriteLine(mydogs[userIndex]);
int[] nums;
int[] nums = {"1", "2", "3", "4"};
Console.WriteLine("Select Number!");
int userIndexInt = Console.ReadLine();
Console.WriteLine(nums[userIndexInt]);
if (userIndex || userIndexInt > 3) {
Console.WriteLine("Index out of range; please reselect!");
}
