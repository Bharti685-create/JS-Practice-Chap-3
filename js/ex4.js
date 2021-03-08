// number of days in a month

let monthNum = prompt("Enter the month number from 1 to 12")

switch (monthNum)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        cout << "31 days";
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        cout << "30 days";
        break;

    case 2:
        // Decision statement for leap year
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
                cout << "29 days" << endl;
            else
                cout << "28 days" << endl;
        }
        else if (year % 100 != 0)
        {
            if (year % 4 == 0)
                cout << "29 days" << endl;
            else
                cout << "28 days" << endl;
        }
        break;

    default:
        cout << "Invalid month. Rerun program. Try again." << endl;
}
}
else
{
cout << "Invalid year. Rerun program. ";
cout << "Try again." << endl;
}

// line break
cout << endl;

// Terminate program
return 0;
}