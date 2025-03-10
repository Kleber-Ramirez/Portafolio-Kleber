function showNext() {
    document.getElementById('questions1').style.display = 'none';
    document.getElementById('questions2').style.display = 'block';
}

function showPrevious() {
    document.getElementById('questions2').style.display = 'none';
    document.getElementById('questions1').style.display = 'block';
}

function calculatePersonality() {
    const form = document.getElementById('testForm');
    const formData = new FormData(form);
    let personalityType = "";

    const answers = {
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    for (let i = 1; i <= 10; i++) {
        const answer = formData.get('q' + i);
        if (answer) {
            answers[answer]++;
        }
    }

    const types = [
        ['E', 'I'], // Extravertido vs Introvertido
        ['S', 'N'], // Sensorial vs Intuitivo
        ['T', 'F'], // Pensamiento vs Sentimiento
        ['J', 'P']  // Juicio vs Percepción
    ];

    types.forEach(type => {
        if (answers[type[0]] >= answers[type[1]]) {
            personalityType += type[0];
        } else {
            personalityType += type[1];
        }
    });

    const descriptions = {
        ENFP: "Los ENFP son entusiastas, creativos y sociables. Se enfocan en las posibilidades y en la búsqueda de nuevas experiencias.",
        INFP: "Los INFP son ideales, leales a sus valores y apasionados por sus creencias. Prefieren la introspección y la reflexión.",
        ENFJ: "Los ENFJ son carismáticos, empáticos y orientados a la gente. Buscan el bienestar de los demás.",
        INFJ: "Los INFJ son intuitivos, reflexivos y profundamente preocupados por los demás. Buscan significado en sus relaciones y experiencias.",
        ESTP: "Los ESTP son enérgicos y prácticos. Se enfocan en el presente y disfrutan de la acción y la resolución de problemas inmediatos.",
        ISTP: "Los ISTP son independientes y analíticos. Prefieren trabajar de manera autónoma y resolver problemas a través de la experiencia práctica.",
        ESTJ: "Los ESTJ son organizados y responsables. Les gusta la estructura y la eficiencia, y a menudo toman roles de liderazgo.",
        ISTJ: "Los ISTJ son meticulosos y confiables. Valoran la tradición y el orden, y prefieren trabajar con hechos y detalles concretos.",
        ESFP: "Los ESFP son espontáneos y disfrutan de la vida al máximo. Son sociables, amigables y les encanta estar rodeados de personas.",
        ISFP: "Los ISFP son creativos y sensibles. Disfrutan de la libertad y la expresión personal y valoran la autenticidad en sus relaciones.",
        ESFJ: "Los ESFJ son cálidos y sociables. Se preocupan por los demás y tienden a ser organizadores eficientes en su entorno social.",
        ISFJ: "Los ISFJ son dedicados y amables. Se enfocan en los detalles y en proporcionar apoyo y cuidado a sus seres queridos.",
        ENTP: "Los ENTP son innovadores y curiosos. Disfrutan de la discusión y el desafío de ideas, y buscan maneras creativas de resolver problemas.",
        INTP: "Los INTP son analíticos y teóricos. Disfrutan explorando ideas abstractas y buscan comprender el mundo a través de la lógica y el razonamiento.",
        ENTJ: "Los ENTJ son líderes naturales y estratégicos. Se enfocan en la eficiencia y el logro de objetivos a largo plazo.",
        INTJ: "Los INTJ son visionarios y decididos. Buscan la perfección y tienen una visión clara de cómo alcanzar sus metas."
    };

    const description = descriptions[personalityType] || "No se pudo determinar tu tipo de personalidad. Asegúrate de haber respondido todas las preguntas.";

    document.getElementById('result').innerText = `Tu tipo de personalidad es: ${personalityType}. ${description}`;
}
