import Titulo from "./Titulo"
import Imagem from "./Imagem"
import Paragrafo from "./Paragrafo"

function Cards() {
   return (
    <>
        <div className="card">
            <Imagem image="https://scontent.fssz1-1.fna.fbcdn.net/v/t31.18172-8/16587172_1411631632242913_7925336913946129282_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHlKlj1o6NepRwKpPTtksY0_0q8EFpTt9P_SrwQWlO30zDjft4A2TUqNCeA_NXmmRJPsMl2QeXej8r5WqgATKbo&_nc_ohc=dtGfmXmdTxIAX-EaQE4&_nc_ht=scontent.fssz1-1.fna&oh=00_AT_SijYykh-tzCsGtgG2G00uBQ4T4xvBdn9T4MGwpNjSyQ&oe=62E4D3A4"></Imagem>
            <Paragrafo> <h2>Olá, eu sou a May</h2>
            Sou aluna Reprograma, e estamos entrando em React. <br />
            Faço umas fotos e vídeos por ai. <br />
            Tenho 30 anos e adoro uma breja!</Paragrafo>
        </div>

        <div className="gif">
            <Titulo title="Git"></Titulo>
            <Imagem image="https://capricho.abril.com.br/wp-content/uploads/2016/08/tumblr_lmx0f3j4gm1qbub2i.gif"></Imagem>
            <Paragrafo >Que tetrix é esse meu povo??? <br />
            Ok, foi complicado eu nem sempre me dou bem, mas está saindo! <br />
            Git e Github são usados por uma grande parte dos desenvolvedores e sei que é um excelente portfolio!
            </Paragrafo>
        </div>

        <div className="gif">
            <Titulo title="HTML"></Titulo>
            <Imagem image="https://data.whicdn.com/images/349866451/original.gif"></Imagem>
            <Paragrafo>Esse é a delicinha da galera. <br />
            Html não é uma linguagem de programação, ele é uma linguagem de hipertexto.</Paragrafo>
        </div>

        <div className="gif">
            <Titulo title="CSS"></Titulo>
            <Imagem image="https://c.tenor.com/bGsRds4KohwAAAAC/gloriagroove-ladyleste.gif"></Imagem>
            <Paragrafo>Css é a beleza do site, deixa tudo mais belo e colorido. <br />
            Mas não se engane, não é nada fácil de se mexer, porém com bastante treino um dia chego lá! <br />
            Atenção Css não é uma linguagem de programação, pois são folhas de estilos em cascata.</Paragrafo>
        </div>

        <div className="gif">
            <Titulo title="JS"></Titulo>
            <Imagem image="https://c.tenor.com/3-aEYf-wbZcAAAAC/nazare-math-lady.gif"></Imagem>
            <Paragrafo>Socorro Deus... <br />
            Linguagem de programação muito usada e popular entre devs, dificil e requer muito, mais muito estudo mesmo, 
            ainda estou tentando endender, um dia irei!

            </Paragrafo>
        </div>



    </>
   )
}
export default Cards