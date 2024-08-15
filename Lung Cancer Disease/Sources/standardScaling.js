export const standardScaling = (dAge, dSex, dSmoking, dAlcoholConsumption, dChronicDisease, dChestPain) =>{

    dSex = dSex === 'M'? 2 : 1;
    
    const age = {
        'mean': 62.67313916,
        'sd': 8.21030139
    };
    const sex = {
        'mean': 1.52427184,
        'sd': .50022060
    };
    const smoking = {
        'mean': 1.56310680,
        'sd': .49680609
    };
    const alcoholconsumption = {
        'mean': 1.55663430,
        'sd': .49758801
    };
    const chronicdisease = {
        'mean': 1.50485437,
        'sd': .50078743
    };
    const chestpain = {
        'mean': 1.55663430,
        'sd': .49758801
    };

    const stats = [age, sex, smoking, alcoholconsumption, chronicdisease, chestpain];
    const data = [dAge, dSex, dSmoking, dAlcoholConsumption, dChronicDisease, dChestPain];

    const scaledData = data.map((x, i) => {
        return (x - stats[i].mean)/(stats[i].sd) 
    });

    return scaledData;


};