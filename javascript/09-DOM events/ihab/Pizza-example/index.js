<javascript>
function multiply()
{
    // Get the input values
    a = Number(document.getElementById('QTY').value);
    b = Number(document.getElementById('PPRICE').value);

    // Do the multiplication
    c = a*b;

    // Set the value of the total
    document.getElementById('TOTAL').value=c;
}
</javascript>