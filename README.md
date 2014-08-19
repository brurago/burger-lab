Burger-lab Front-end
====================
###Novo projeto usando super poderes :O

Codificado, testado e documentado por Bruno Rocha Agostinho (bruno@magnadev.com.br)

---

##Super poderes utilizados:
   - [Yeoman]
   - [Bower]
   - [Grunt]
   - [Bootstrap SASS oficial edition]
   - [Compass]

---
###Etapas de instalação no `windows`

   - Baixar e instalar [NodeJS]
   - Baixar e instalar [Ruby]
         certifique-se de selecionar as três opções do instalador para adicionar o Ruby no PATH do terminal
   - Executar no `gitbash` os comandos `gem update --system` e `gem install compass`
   - Instalar `bower` utilizando o comando `npm install -g bower`
   - Instalar `grunt` utilizando o comando `npm install -g grunt`
   - Instalar `yeoman` utilizando o comando `npm install -g yeoman`

###Baixando o projeto
- Crie uma pasta local para o projeto e acesse ela pelo `gitbash` e clone o projeto

    ```sh
    git clone git@github.com:brurago/burger-lab.git
    ```

- Baixe as libs javascript e css com o `bower` utilizando

    ```sh
    bower install
    ```
    
- Instale os projetos utilizados pelo `NodeJS` utilizando

     ```sh
    npm install
    ```

- Rode a aplicação utilizando o comando

     ```sh
    grunt serve
    ```

- "Build" a aplicação utilizando o comando

     ```sh
    grunt build
    ```

[Yeoman]:http://yeoman.io/
[Bower]:http://bower.io/
[Grunt]:http://gruntjs.com/
[Sass]:https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CC0QFjAA&url=http%3A%2F%2Fsass-lang.com%2F&ei=5WNhU7jFHa238gGB1IEI&usg=AFQjCNGj26Uvw2Xaq_ZQbByTuIQsbFtzjA&sig2=rIvqmROZEzOFlSEikphaGg&bvm=bv.65636070,d.b2U
[Compass]:https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CC0QFjAA&url=http%3A%2F%2Fcompass-style.org%2F&ei=82NhU6PfKNHisASB9ID4CA&usg=AFQjCNH2Ew4UJ8Zvw_2eQjVN5oEsjcLWQg&sig2=5CG_zRfZ6UFqPJEpqyciEA&bvm=bv.65636070,d.cWc
[NodeJS]:http://nodejs.org
[Ruby]:http://rubyinstaller.org