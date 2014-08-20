Burger-lab Front-end
====================
###Novo projeto usando superpoderes :D

Codificado, testado e documentado por Bruno Rocha Agostinho (bruno@magnadev.com.br)

---

##Superpoderes utilizados:
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

- "Builde" a aplicação utilizando o comando

     ```sh
    grunt build
    ```

[Yeoman]:http://yeoman.io
[Bower]:http://bower.io
[Grunt]:http://gruntjs.com
[Sass]:http://sass-lang.com
[Compass]:http://compass-style.org
[NodeJS]:http://nodejs.org
[Ruby]:http://rubyinstaller.org
[Bootstrap SASS oficial edition]:https://github.com/twbs/bootstrap-sass