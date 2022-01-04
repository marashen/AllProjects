Console.WriteLine("Welcome to Package Express!");
Console.WriteLine("Please Enter the Package Weight:");
int weight = Console.ReadLine();
if (weight > 50) {
  Console.WriteLine("To Heavy!!!");
  }
else {
  Console.WriteLine("Please Enter the Package Width:");
  int width = Console.ReadLine();
  if (width > 40) {
  Console.WriteLine("To Wide!!!");
  }
  else {
    Console.WriteLine("Please Enter the Package Height:");
    int height = Console.ReadLine();
    if (height > 55) {
    Console.WriteLine("To Tall!!!");
    }
    else {
      Console.WriteLine("Please Enter the Package Length:");
      int length = Console.ReadLine();
      if (length > 55) {
      Console.WriteLine("To Long!!!");
      }
      else {
      int tpt = height * length * width * weight
      int quote = tpt / 100
      Console.WriteLine("Your estimated total is: $" + quote);
      }
    }
  }
}
