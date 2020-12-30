const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewShift = (objeto, chave, valor) => {
    objeto[chave] = valor;
  };

  addNewShift(lesson2, 'turno', 'manhã');

  const listKeys = (objeto) => Object.keys(objeto);
  console.log(listKeys(lesson2));

  const objectSize = (obj) => Object.keys(obj).length;
  console.log(objectSize(lesson3));

  const objectValues = (objeto) => Object.values(objeto);
  console.log(objectValues(lesson1));

  const allLessons = Object.assign({}, {lesson1 , lesson2, lesson3});
  console.log(allLessons);

