// Tämä komponentti on vain esimerkki datan rakenteesta. class on vain värien takia. 
// ota käyttöön muualla ja poista. 

export default class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Esimerkki datan rakenteesta. 

            workouts: [
                {
                    programName: 'Voimaohjelma',
                    goal: 'Saada lisää voimaa',
                    notes: 'Muistiinpanot koko ohjelmasta. Default on null',
                    trainingdays: [
                        {
                            trainingDay: 'indeksi ja nimi jos on asetettu',
                            excercises: [
                                {
                                    excerciseName: 'Penkkipunnerrus',
                                    weights: 80,
                                    sets: 4,
                                    reps: 10,
                                    notes: 'String. default on null'
                                },
                                {
                                    excerciseName: 'Kyykky',
                                    weights: 90,
                                    sets: 3, 
                                    reps: 12, 
                                    notes: 'String. Default on null'
                                }
                            ]
                        },
                       {
                        trainingDay: 'indeksi ja nimi jos on asetettu',
                        excercises: [
                            {
                                excerciseName: 'Maastaveto',
                                weights: 75,
                                sets: 5,
                                reps: 8,
                                notes: 'String. default on null'
                            },
                       }
                    ]
                }
            ]
        };
    }
}
