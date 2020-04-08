let data, interestCalc;

data = [
    {principal : 2500, time : 1.8},
    {principal : 1000, time : 5},
    {principal : 3000, time : 1},
    {principal : 2000, time : 3}
];

interestCalc = item => {
    item.map(xyz => {
        let rate, interest, interestDat;
        if (xyz.principal >= 2500 && xyz.time> 1 && xyz.time < 3) {
            rate = 3;
        }
        else if (xyz.principal >= 2500 && xyz.time >= 3) {
            rate = 4;
        }
        else if (xyz.principal < 2500 || xyz.time <= 1) {
            rate = 2;
        }
        else {
            rate = 1;
        }
        interest = (xyz.principal*xyz.time*rate)/ 100;
        interestDat = [{
            principal : xyz.principal,
            rate : rate,
            time : xyz.time,
            interest : interest
        }];
        console.log(interestDat);
        return interestDat;
    });
}

interestCalc(data);