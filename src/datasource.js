import { v4 as uuidv4 } from "uuid"

const times = [
    {
        id: uuidv4(),
        nome: 'Programação',
        cor: '#57C278'
    },
    {
        id: uuidv4(),
        nome: 'Front-End',
        cor: '#82CFFA'
    },
    {
        id: uuidv4(),
        nome: 'Data Science',
        cor: '#A6D157'
    },
    {
        id: uuidv4(),
        nome: 'Devops',
        cor: '#E06B69'
    },
    {
        id: uuidv4(),
        nome: 'UX e Design',
        cor: '#DB6EBF'
    },
    {
        id: uuidv4(),
        nome: 'Mobile',
        cor: '#FFBA05'
    },
    {
        id: uuidv4(),
        nome: 'Inovação e Gestão',
        cor: '#FF8A29'
    }
]

const colaboradores = [
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[0].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[0].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[0].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[0].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'VINICIUS MARTINS',
        cargo: 'Desenvolvedor da Prodam',
        imagem: 'https://www.github.com/vinibit.png',
        time: times[0].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[1].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[1].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[1].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[1].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[2].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[2].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[2].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[2].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[3].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[3].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[3].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[3].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[4].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[4].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[4].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[4].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'JULIANA AMOASEI',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: times[5].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'DANIEL ARTINE',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: times[5].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'GUILHERME LIMA',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: times[5].id
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'PAULO SILVEIRA',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: times[5].id
    }
]

export default { times, colaboradores };