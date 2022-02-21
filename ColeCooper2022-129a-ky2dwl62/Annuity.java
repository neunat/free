public class Annuity{
  public double getPresentValue(double pmt, double interest, int numberPayments)  {
    double annuity = pmt*((1 - (Math.pow((1+interest),(numberPayments*(-1))) ))/interest);
    return annuity;
  }
}