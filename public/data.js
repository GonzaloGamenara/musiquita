/* Catálogo de Musiquita.
   Una canción por línea:  Artista|Canción
   (los nombres tienen que parecerse a como figuran en Apple Music / iTunes para que la app encuentre el audio).
   Para sumar o sacar temas editá este archivo, o creá categorías propias desde la app. */
(function () {
  const R = [];
  const add = (id, emoji, name, text) =>
    R.push({
      id, emoji, name,
      items: text.trim().split('\n').map(l => l.trim()).filter(Boolean).map(l => {
        const [a, ...t] = l.split('|');
        return { a: a.trim(), t: t.join('|').trim() };
      })
    });

  add('rock-clasico', '🎸', 'Rock nacional clásico', `
Soda Stereo|De Música Ligera
Soda Stereo|Persiana Americana
Soda Stereo|Cuando Pase el Temblor
Soda Stereo|En la Ciudad de la Furia
Soda Stereo|Prófugos
Soda Stereo|Un Millón de Años Luz
Soda Stereo|Té para Tres
Soda Stereo|Signos
Soda Stereo|Trátame Suavemente
Soda Stereo|Sobredosis de TV
Gustavo Cerati|Puente
Gustavo Cerati|Crimen
Gustavo Cerati|Adiós
Charly García|Demoliendo Hoteles
Charly García|Los Dinosaurios
Charly García|Nos Siguen Pegando Abajo
Charly García|Rezo por Vos
Charly García|Promesas Sobre el Bidet
Charly García|Estaba en Llamas Cuando Me Acosté
Charly García|Inconsciente Colectivo
Charly García|Cerca de la Revolución
Almendra|Muchacha Ojos de Papel
Luis Alberto Spinetta|Seguir Viviendo Sin Tu Amor
Fito Páez|Un Vestido y un Amor
Fito Páez|Y Dale Alegría a Mi Corazón
Fito Páez|Mariposa Tecknicolor
Fito Páez|Circo Beat
Fito Páez|11 y 6
Fito Páez|Al Lado del Camino
Fito Páez|Tráfico por Katmandú
Fito Páez|Brillante Sobre el Mic
Los Abuelos de la Nada|Mil Horas
Los Abuelos de la Nada|Himno de Mi Corazón
Los Abuelos de la Nada|Cosas Mías
Sumo|La Rubia Tarada
Sumo|Mejor No Hablar de Ciertas Cosas
Sumo|Divididos por la Felicidad
Virus|Wadu Wadu
Virus|Pronta Entrega
Serú Girán|Seminare
Serú Girán|Canción de Alicia en el País
Pappo's Blues|Sucio y Desprolijo
Los Enanitos Verdes|Lamento Boliviano
Los Enanitos Verdes|Mariposas
Los Enanitos Verdes|Por el Resto
Miguel Mateos|Tirá para Arriba
Miguel Mateos|Cuando Seas Grande
Andrés Calamaro|Flaca
Andrés Calamaro|Crímenes Perfectos
Andrés Calamaro|Paloma
Andrés Calamaro|Estadio Azteca
Andrés Calamaro|Sin Documentos
Los Rodríguez|Para No Olvidar
Los Rodríguez|Dulce Condena
Los Pericos|Pupilas Lejanas
Los Pericos|Runaway
Los Pericos|Sin Cadenas
`);

  add('rock-90', '🤘', 'Rock nacional de los 90 y 2000', `
Los Piojos|Verano del 92
Los Piojos|Ay Ay Ay
Los Piojos|Maradó
Los Piojos|Babilonia
La Renga|El Revelde
La Renga|Hablando de la Libertad
La Renga|A Tu Lado
La Renga|Tripa y Corazón
La Renga|Balada del Diablo y la Muerte
La Renga|Paja Brava
Babasónicos|Y Qué
Babasónicos|Irresponsables
Babasónicos|Los Calientes
Babasónicos|El Loco
Babasónicos|Desfachatados
Babasónicos|Carismático
Bersuit Vergarabat|Sr. Cobranza
Bersuit Vergarabat|Se Viene
Bersuit Vergarabat|Yo Tomo
Bersuit Vergarabat|La Argentinidad al Palo
Bersuit Vergarabat|Un Pacto
Los Auténticos Decadentes|El Murguero
Los Auténticos Decadentes|Los Piratas
Los Auténticos Decadentes|La Guitarra
Los Auténticos Decadentes|Loco (Tu Forma de Ser)
Los Auténticos Decadentes|Vení Raquel
Los Auténticos Decadentes|Siga el Baile
Los Fabulosos Cadillacs|Matador
Los Fabulosos Cadillacs|Mal Bicho
Los Fabulosos Cadillacs|Vasos Vacíos
Los Fabulosos Cadillacs|El Satánico Dr. Cadillac
Los Fabulosos Cadillacs|Demasiada Presión
Los Fabulosos Cadillacs|Los Condenaditos
Los Fabulosos Cadillacs|Yo No Me Sentaría en Tu Mesa
Los Fabulosos Cadillacs|Carnaval Toda la Vida
Divididos|Spaghetti del Rock
Divididos|Qué Tal
Divididos|Ala Delta
Divididos|Paisano de Hurlingham
Divididos|Par Mil
Divididos|El 38
Divididos|Sábado
Vilma Palma e Vampiros|La Pachanga
Vilma Palma e Vampiros|Auto Rojo
Illya Kuryaki and the Valderramas|Abarajame
Illya Kuryaki and the Valderramas|Jaguar
Las Pelotas|Sueños
Rata Blanca|La Leyenda del Hada y el Mago
Rata Blanca|Mujer Amante
Cuarteto de Nos|Ya No Sé Qué Hacer Conmigo
Cuarteto de Nos|Yendo a la Casa de Damián
La Vela Puerca|Zafar
La Vela Puerca|Va a Escampar
Los Caligaris|Mi Vida
Attaque 77|Hacelo por Mí
Pedro Aznar|Quebrado
`);

  add('rock-es', '🌮', 'Rock y pop en español', `
Maná|Rayando el Sol
Maná|Corazón Espinado
Maná|Clavado en un Bar
Maná|Oye Mi Amor
Maná|Vivir Sin Aire
Maná|Mariposa Traicionera
Maná|Labios Compartidos
Maná|Te Lloré un Río
Héroes del Silencio|Entre Dos Tierras
Héroes del Silencio|Maldito Duende
Héroes del Silencio|Avalancha
Mecano|Hijo de la Luna
Mecano|Mujer Contra Mujer
Mecano|Cruz de Navajas
Mecano|Me Cuesta Tanto Olvidarte
Jarabe de Palo|La Flaca
Jarabe de Palo|Depende
Jarabe de Palo|Bonito
La Oreja de Van Gogh|La Playa
La Oreja de Van Gogh|Rosas
La Oreja de Van Gogh|Puedes Contar Conmigo
La Oreja de Van Gogh|Cuídate
Los Prisioneros|El Baile de los que Sobran
Los Prisioneros|Tren al Sur
Los Prisioneros|La Voz de los '80
Café Tacvba|Eres
Café Tacvba|La Ingrata
Caifanes|La Célula Que Explota
Caifanes|Afuera
Molotov|Gimme Tha Power
Molotov|Frijolero
La Ley|Aquí
La Ley|El Duelo
La Ley|Mentira
Juanes|La Camisa Negra
Juanes|A Dios le Pido
Juanes|Es por Ti
Juanes|Para Tu Amor
Chayanne|Torero
Chayanne|Dejaría Todo
Chayanne|Provócame
Ricardo Arjona|Si el Norte Fuera el Sur
Ricardo Arjona|Señora de las Cuatro Décadas
Ricardo Arjona|Quién
Alejandro Sanz|Corazón Partío
Alejandro Sanz|Mi Soledad y Yo
Alejandro Sanz|Amiga Mía
Alejandro Sanz|Cuando Nadie Me Ve
Calle 13|Atrévete-te-te
Calle 13|Latinoamérica
Enrique Iglesias|Bailando
Enrique Iglesias|Hero
Enrique Iglesias|Escape
Enrique Iglesias|Súbeme la Radio
Gloria Estefan|Conga
Gloria Estefan|Hoy
Ricky Martin|Livin' la Vida Loca
Ricky Martin|La Copa de la Vida
Ricky Martin|María
Ricky Martin|Vente Pa' Ca
Shakira|Estoy Aquí
Shakira|Ojos Así
Shakira|Ciega, Sordomuda
Shakira|Te Felicito
Shakira|La Tortura
Shakira|Inevitable
`);

  add('rock-int', '🎸', 'Rock internacional', `
Queen|Bohemian Rhapsody
Queen|We Will Rock You
Queen|Don't Stop Me Now
Queen|Another One Bites the Dust
Queen|Somebody to Love
Queen|Under Pressure
Queen|I Want to Break Free
Queen|We Are the Champions
The Beatles|Let It Be
The Beatles|Hey Jude
The Beatles|Yesterday
The Beatles|Come Together
The Beatles|Here Comes the Sun
The Beatles|Help!
The Beatles|Twist and Shout
Led Zeppelin|Stairway to Heaven
Led Zeppelin|Whole Lotta Love
Led Zeppelin|Kashmir
AC/DC|Back in Black
AC/DC|Highway to Hell
AC/DC|Thunderstruck
AC/DC|You Shook Me All Night Long
Guns N' Roses|Sweet Child O' Mine
Guns N' Roses|Welcome to the Jungle
Guns N' Roses|November Rain
Guns N' Roses|Paradise City
Nirvana|Smells Like Teen Spirit
Nirvana|Come as You Are
Nirvana|Lithium
Nirvana|Heart-Shaped Box
Metallica|Enter Sandman
Metallica|Nothing Else Matters
Metallica|One
Metallica|Master of Puppets
Red Hot Chili Peppers|Californication
Red Hot Chili Peppers|Can't Stop
Red Hot Chili Peppers|Under the Bridge
Red Hot Chili Peppers|Scar Tissue
Red Hot Chili Peppers|Snow (Hey Oh)
Green Day|Basket Case
Green Day|Wake Me Up When September Ends
Linkin Park|In the End
Linkin Park|Numb
Linkin Park|Crawling
Linkin Park|What I've Done
Linkin Park|Faint
Foo Fighters|Everlong
Foo Fighters|The Pretender
Foo Fighters|Best of You
The Killers|Mr. Brightside
The Killers|Somebody Told Me
The Killers|When You Were Young
Oasis|Wonderwall
Oasis|Don't Look Back in Anger
Oasis|Champagne Supernova
U2|With or Without You
U2|One
U2|Beautiful Day
Pink Floyd|Another Brick in the Wall, Pt. 2
Pink Floyd|Wish You Were Here
Pink Floyd|Comfortably Numb
Bon Jovi|It's My Life
Bon Jovi|Livin' on a Prayer
Bon Jovi|Always
Aerosmith|I Don't Want to Miss a Thing
Aerosmith|Dream On
Aerosmith|Crazy
Eagles|Hotel California
The Rolling Stones|Paint It Black
The Rolling Stones|(I Can't Get No) Satisfaction
The Rolling Stones|Sympathy for the Devil
Arctic Monkeys|Do I Wanna Know?
Arctic Monkeys|R U Mine?
Muse|Uprising
Muse|Supermassive Black Hole
The Strokes|Last Nite
Blink-182|All the Small Things
Blink-182|I Miss You
Evanescence|Bring Me to Life
System of a Down|Chop Suey!
System of a Down|Toxicity
Radiohead|Creep
Twenty One Pilots|Stressed Out
Twenty One Pilots|Heathens
Fall Out Boy|Sugar, We're Goin Down
My Chemical Romance|Welcome to the Black Parade
Paramore|Misery Business
Panic! At the Disco|I Write Sins Not Tragedies
Panic! At the Disco|High Hopes
The Offspring|Pretty Fly (For a White Guy)
Limp Bizkit|Break Stuff
Rage Against the Machine|Killing in the Name
Kings of Leon|Sex on Fire
Kings of Leon|Use Somebody
Coldplay|Yellow
Coldplay|Fix You
Coldplay|The Scientist
Coldplay|Viva la Vida
Coldplay|Paradise
Coldplay|A Sky Full of Stars
`);

  add('cumbia', '💃', 'Cumbia y cuarteto', `
Rodrigo|La Mano de Dios
Rodrigo|Lo Mejor del Amor
Rodrigo|Ocho Cuarenta
Rodrigo|Soy Cordobés
Rodrigo|Cómo Olvidarla
Gilda|No Me Arrepiento de Este Amor
Gilda|Fuiste
Gilda|Corazón Valiente
Gilda|Se Me Ha Perdido un Corazón
Gilda|Paisaje
La Mona Jiménez|Beso a Beso
Los Ángeles Azules|Cómo Te Voy a Olvidar
Los Ángeles Azules|Entrega de Amor
Los Ángeles Azules|17 Años
Los Ángeles Azules|Mis Sentimientos
Ráfaga|Mentirosa
Damas Gratis|Se Te Ve la Tanga
`);

  add('pop-ar', '🎤', 'Pop argentino', `
Tini|Miénteme
Tini|Maldita Foto
Tini|Oye
Tini|Bar
Tini|Fresa
Lali|Boomerang
Lali|Una Na
Lali|A Bailar
Lali|Soy
Lali|Laligera
Lali|Ego
Lali|Disciplina
Lali|Motiveishon
Emilia|Como Si No Importara
Emilia|La Original
María Becerra|Wow Wow
María Becerra|High
María Becerra|Acaramelao
María Becerra|Qué Más Pues?
María Becerra|Automático
Nicki Nicole|Wapo Traketero
Nicki Nicole|Mamichula
Abel Pintos|Motivos
Abel Pintos|La Llave
Diego Torres|Color Esperanza
Diego Torres|Tratar de Estar Mejor
Diego Torres|Sé Que Ya No Volverás
Ricardo Montaner|Tan Enamorados
Ricardo Montaner|Déjame Llorar
Sin Bandera|Entra en Mi Vida
Sin Bandera|Suelta Mi Mano
Miranda!|Don
Miranda!|Prisionero
Miranda!|Perfecta
Miranda!|Yo Te Diré
Tan Biónica|Ciudad Mágica
Tan Biónica|Obsesionario
Tan Biónica|La Melodía de Dios
Sandro|Rosa Rosa
Sandro|Dame Fuego
Sandro|Quiero Llenarme de Ti
Palito Ortega|La Felicidad
Leonardo Favio|Fuiste Mía un Verano
Leonardo Favio|Ella Ya Me Olvidó
Nathy Peluso|Buenos Aires
`);

  add('urbano-ar', '🧢', 'Trap y música urbana argentina', `
Duki|She Don't Give a FO
Duki|Goteo
Bizarrap|Quevedo: Bzrp Music Sessions, Vol. 52
Bizarrap|Shakira: Bzrp Music Sessions, Vol. 53
Bizarrap|Duki: Bzrp Music Sessions, Vol. 50
Bizarrap|Milo J: Bzrp Music Sessions, Vol. 57
Bizarrap|Nicki Nicole: Bzrp Music Sessions, Vol. 13
Bizarrap|L-Gante: Bzrp Music Sessions, Vol. 38
Paulo Londra|Adán y Eva
Paulo Londra|Tal Vez
Paulo Londra|Solo Pienso en Ti
Paulo Londra|Plan A
Paulo Londra|Forever Alone
Trueno|Dance Crip
Trueno|Mamichula
Trueno|Bien o Mal
Wos|Canguro
Wos|Arrancármelo
Tiago PZK|Entre Nosotros
Los Pericos|Sin Cadenas
`);

  add('latino', '🔥', 'Reggaetón y latino', `
Daddy Yankee|Gasolina
Daddy Yankee|Dura
Daddy Yankee|Con Calma
Daddy Yankee|Limbo
Don Omar|Danza Kuduro
Don Omar|Dale Don Dale
Wisin & Yandel|Rakata
Wisin & Yandel|Estoy Enamorado
Wisin & Yandel|Sexy Movimiento
Luis Fonsi|Despacito
Luis Fonsi|Échame la Culpa
Shakira|Hips Don't Lie
Shakira|Waka Waka (This Time for Africa)
Shakira|Loca
Shakira|Chantaje
Shakira|Whenever, Wherever
Shakira|Bzrp Music Sessions, Vol. 53
Don Omar|Danza Kuduro
`);

  add('pop-2000', '💿', 'Pop internacional 2000s y 2010s', `
`);

  add('pop-actual', '🎧', 'Pop actual', `
`);

  add('peques', '🧒', 'Hits de la infancia', `
Daddy Yankee|Gasolina
Tan Biónica|Ciudad Mágica
`);

  add('cine', '🎬', 'Cine, series y Disney', `
Aerosmith|I Don't Want to Miss a Thing
Shakira|Try Everything
Queen|Bohemian Rhapsody
`);

  add('retro', '🕺', 'Hits de los 80 y 90', `
Oasis|Wonderwall
Bon Jovi|Livin' on a Prayer
Guns N' Roses|Sweet Child O' Mine
`);

  add('folklore', '🪕', 'Folklore y tango', `
Divididos|Ala Delta
`);

  add('mundial', '🏟️', 'Mundial y cancha', `
Shakira|Waka Waka (This Time for Africa)
Ricky Martin|La Copa de la Vida
Queen|We Are the Champions
Queen|We Will Rock You
Rodrigo|La Mano de Dios
Los Fabulosos Cadillacs|Vasos Vacíos
Los Piojos|Maradó
Los Auténticos Decadentes|Los Piratas
Soda Stereo|De Música Ligera
Fito Páez|Un Vestido y un Amor
Charly García|Los Dinosaurios
Daddy Yankee|Gasolina
Maná|Rayando el Sol
Enrique Iglesias|Bailando
`);

  add('electro', '🎹', 'Electrónica y dance', `
Bizarrap|Quevedo: Bzrp Music Sessions, Vol. 52
`);

  window.MUSIQUITA_CATS = R;
})();
