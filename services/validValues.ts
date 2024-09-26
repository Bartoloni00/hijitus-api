type Gender = 'Masculino' | 'Femenino' | 'N/A';
type Category = 'Protagonista' | 'Antagonista' | 'Secundario' | 'Episodico';
type Species = 'Humano' | 'Perro' | 'Mounstruo' | 'Canguro' | 'Pajaro' | 'Dragon' | 'Pingüino' | 'Búho' | 'Robot';
type Personality = 'Bueno' | 'Malo' | 'Neutral';

const genderValues:      Gender[]      = ['Masculino', 'Femenino', 'N/A'];
const categoryValues:    Category[]    = ['Protagonista', 'Antagonista', 'Secundario', 'Episodico'];
const speciesValues:     Species[]     = ['Humano', 'Perro', 'Mounstruo', 'Canguro', 'Pajaro', 'Dragon', 'Pingüino', 'Búho', 'Robot'];
const personalityValues: Personality[] = ['Bueno', 'Malo', 'Neutral'];

export {
    genderValues,
    categoryValues,
    speciesValues,
    personalityValues
};
