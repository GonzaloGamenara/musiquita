/* Catálogo de Musiquita (GENERADO por tools/build.js — no editar a mano).
   Para agregar canciones: editá tools/data.full.js, corré tools/validate.js y después tools/build.js.
   Una canción por línea:  Artista|Canción  */
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

  add("rock-clasico", "🎸", "Rock nacional clásico", `
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

  add("rock-90", "🤘", "Rock nacional de los 90 y 2000", `
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

  add("rock-es", "🌮", "Rock y pop en español", `
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

  add("rock-int", "🎸", "Rock internacional", `
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

  add("cumbia", "💃", "Cumbia y cuarteto", `
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

  add("pop-ar", "🎤", "Pop argentino", `
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

  add("urbano-ar", "🧢", "Trap y música urbana argentina", `
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

  add("latino", "🔥", "Reggaetón y latino", `
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
Bad Bunny|Ojitos Lindos
J Balvin|Mi Gente
J Balvin|Ginza
J Balvin|Ay Vamos
J Balvin|Safari
Karol G|Provenza
Maluma|Felices los 4
Maluma|Hawái
Maluma|Corazón
Maluma|11 PM
Ozuna|Baila Baila Baila
Ozuna|Taki Taki
Becky G|Mayores
Becky G|Sin Pijama
Quevedo|Columbia
Myke Towers|Lala
Nicky Jam|El Perdón
Nicky Jam|X
Romeo Santos|Propuesta Indecente
Prince Royce|Stand by Me
Prince Royce|Corazón Sin Cara
Marc Anthony|Vivir Mi Vida
Marc Anthony|Valió la Pena
Shakira|Hips Don't Lie
Shakira|Waka Waka (This Time for Africa)
Shakira|Loca
Shakira|Chantaje
Shakira|Whenever, Wherever
Shakira|Bzrp Music Sessions, Vol. 53
Sebastián Yatra|Traicionera
Camilo|Vida de Rico
Anitta|Envolver
Peso Pluma|Ella Baila Sola
Grupo Frontera|Un x100to
Rosalía|Malamente
Rosalía|Con Altura
Don Omar|Danza Kuduro
Pitbull|Give Me Everything
Pitbull|Timber
Natti Natasha|Criminal
Becky G|Shower
Lunay|Soltera
Zion & Lennox|Yo Voy
Plan B|Si No Le Contesto
Tito El Bambino|El Amor
`);

  add("pop-2000", "💿", "Pop internacional 2000s y 2010s", `
Britney Spears|...Baby One More Time
Britney Spears|Toxic
Britney Spears|Oops!... I Did It Again
Britney Spears|Womanizer
Rihanna|Umbrella
Rihanna|Diamonds
Rihanna|We Found Love
Rihanna|Only Girl (In the World)
Rihanna|Don't Stop the Music
Beyoncé|Crazy in Love
Beyoncé|Single Ladies (Put a Ring on It)
Beyoncé|Halo
Beyoncé|Love on Top
Katy Perry|Firework
Katy Perry|California Gurls
Katy Perry|Roar
Katy Perry|Teenage Dream
Katy Perry|Dark Horse
Lady Gaga|Poker Face
Lady Gaga|Just Dance
Lady Gaga|Bad Romance
Lady Gaga|Paparazzi
Black Eyed Peas|I Gotta Feeling
Black Eyed Peas|Where Is the Love?
Black Eyed Peas|Boom Boom Pow
Black Eyed Peas|Don't Phunk with My Heart
Justin Timberlake|SexyBack
Justin Timberlake|Cry Me a River
Justin Timberlake|Can't Stop the Feeling!
Usher|Yeah!
Usher|OMG
P!nk|Just Give Me a Reason
P!nk|So What
P!nk|Get the Party Started
Kesha|TiK ToK
Kesha|Die Young
Avril Lavigne|Complicated
Avril Lavigne|Sk8er Boi
Avril Lavigne|Girlfriend
Miley Cyrus|Party in the U.S.A.
Miley Cyrus|Wrecking Ball
Taylor Swift|Love Story
Taylor Swift|You Belong with Me
Taylor Swift|Shake It Off
Taylor Swift|Blank Space
Jonas Brothers|Burnin' Up
Jonas Brothers|Sucker
Selena Gomez|Come & Get It
Selena Gomez|Love You Like a Love Song
Bruno Mars|Just the Way You Are
Bruno Mars|Grenade
Bruno Mars|Locked Out of Heaven
Bruno Mars|The Lazy Song
Maroon 5|Moves Like Jagger
Maroon 5|Sugar
Maroon 5|This Love
Maroon 5|Payphone
OneRepublic|Counting Stars
OneRepublic|Apologize
Adele|Rolling in the Deep
Adele|Someone Like You
Adele|Hello
Adele|Set Fire to the Rain
Ed Sheeran|Shape of You
Ed Sheeran|Perfect
Ed Sheeran|Thinking Out Loud
Ed Sheeran|The A Team
Sia|Chandelier
Sia|Cheap Thrills
Shawn Mendes|Stitches
Shawn Mendes|Treat You Better
Justin Bieber|Baby
Justin Bieber|Sorry
Justin Bieber|Love Yourself
Eminem|Lose Yourself
Eminem|Without Me
Eminem|Love the Way You Lie
Nelly Furtado|Promiscuous
Nelly Furtado|Maneater
Amy Winehouse|Rehab
Amy Winehouse|Back to Black
Gnarls Barkley|Crazy
Flo Rida|Low
Flo Rida|Right Round
LMFAO|Party Rock Anthem
LMFAO|Sexy and I Know It
Jason Derulo|Whatcha Say
Jason Derulo|Talk Dirty
Carly Rae Jepsen|Call Me Maybe
Gotye|Somebody That I Used to Know
PSY|Gangnam Style
Owl City|Fireflies
One Direction|What Makes You Beautiful
One Direction|Story of My Life
Lorde|Royals
Ellie Goulding|Lights
Fergie|London Bridge
Fergie|Fergalicious
Christina Aguilera|Genie in a Bottle
Christina Aguilera|Beautiful
Nicki Minaj|Super Bass
Nicki Minaj|Starships
Calvin Harris|Summer
`);

  add("pop-actual", "🎧", "Pop actual", `
The Weeknd|Blinding Lights
The Weeknd|Starboy
The Weeknd|Save Your Tears
Dua Lipa|Levitating
Dua Lipa|Don't Start Now
Dua Lipa|New Rules
Billie Eilish|bad guy
Billie Eilish|ocean eyes
Billie Eilish|lovely
Billie Eilish|What Was I Made For?
Ariana Grande|7 rings
Ariana Grande|thank u, next
Ariana Grande|Into You
Ariana Grande|no tears left to cry
Harry Styles|As It Was
Harry Styles|Watermelon Sugar
Harry Styles|Adore You
Olivia Rodrigo|drivers license
Olivia Rodrigo|good 4 u
Olivia Rodrigo|vampire
Post Malone|Circles
Post Malone|Sunflower
Post Malone|rockstar
Doja Cat|Say So
Doja Cat|Woman
Doja Cat|Kiss Me More
Sabrina Carpenter|Espresso
Sabrina Carpenter|Please Please Please
Miley Cyrus|Flowers
Lizzo|Good as Hell
Imagine Dragons|Believer
Imagine Dragons|Thunder
Imagine Dragons|Radioactive
Imagine Dragons|Demons
Lewis Capaldi|Someone You Loved
Sam Smith|Stay with Me
Sam Smith|Unholy
Taylor Swift|Anti-Hero
Taylor Swift|Cruel Summer
Taylor Swift|Lover
Camila Cabello|Havana
Camila Cabello|Señorita
Charlie Puth|See You Again
Charlie Puth|Attention
Tones and I|Dance Monkey
Lil Nas X|Old Town Road
Lil Nas X|MONTERO (Call Me By Your Name)
Chappell Roan|Good Luck, Babe!
Chappell Roan|Pink Pony Club
Benson Boone|Beautiful Things
Kendrick Lamar|Not Like Us
Kendrick Lamar|HUMBLE.
Travis Scott|SICKO MODE
Drake|Hotline Bling
Drake|One Dance
Drake|God's Plan
Rema|Calm Down
Glass Animals|Heat Waves
Lady Gaga|Die With A Smile
Rosé|APT.
Tate McRae|greedy
Teddy Swims|Lose Control
Zach Bryan|Something in the Orange
Morgan Wallen|Last Night
Ice Spice|Munch (Feelin' U)
SZA|Kill Bill
SZA|Snooze
Miley Cyrus|Used to Be Young
Joji|Glimpse of Us
Måneskin|Beggin'
Gigi Perez|Sailor Song
`);

  add("peques", "🧒", "Hits de la infancia", `
Hannah Montana|Nobody's Perfect
Miley Cyrus|The Climb
Camp Rock Cast|We Rock
Demi Lovato|Get Back
RBD|Rebelde
RBD|Tras de Mí
RBD|Solo Quédate en Silencio
RBD|Nuestro Amor
RBD|Celestial
RBD|Un Poco de Tu Amor
Las Ketchup|Aserejé
O-Zone|Dragostea Din Tei
Eiffel 65|Blue (Da Ba Dee)
Aqua|Barbie Girl
Crazy Frog|Axel F
Shaggy|It Wasn't Me
Daddy Yankee|Gasolina
Pitbull|Culo
Jonas Brothers|Year 3000
Aly & AJ|Potential Breakup Song
The Cheetah Girls|Cheetah Sisters
Cheetah Girls|Strut
Vanessa Hudgens|Say OK
Hilary Duff|Come Clean
Hilary Duff|So Yesterday
Ashlee Simpson|Pieces of Me
Lindsay Lohan|Rumors
Jesse McCartney|Beautiful Soul
Sean Kingston|Beautiful Girls
Tokio Hotel|Monsoon
Tokio Hotel|Durch den Monsun
Kidz Bop Kids|Shake It Off
Jesse & Joy|Espacio Sideral
Jesse & Joy|Corre
Tan Biónica|Ciudad Mágica
Chiquititas|Chiquititas
`);

  add("cine", "🎬", "Cine, series y Disney", `
Idina Menzel|Let It Go
Auliʻi Cravalho|How Far I'll Go
Randy Newman|You've Got a Friend in Me
Elton John|Can You Feel the Love Tonight
Elton John|Circle of Life
Phil Collins|You'll Be in My Heart
Phil Collins|Two Worlds
Celine Dion|My Heart Will Go On
Celine Dion|Beauty and the Beast
Whitney Houston|I Will Always Love You
Survivor|Eye of the Tiger
Ray Parker Jr.|Ghostbusters
Lady Gaga|Shallow
Bryan Adams|(Everything I Do) I Do It for You
Kenny Loggins|Danger Zone
Berlin|Take My Breath Away
Adele|Skyfall
Billie Eilish|No Time to Die
Wiz Khalifa|See You Again
Dua Lipa|Dance The Night
Miguel|Remember Me
Encanto Cast|We Don't Talk About Bruno
Jon Batiste|It's All Right
Sebastian Yatra|Dos Oruguitas
Daniel Powter|Bad Day
Louis Armstrong|What a Wonderful World
Aerosmith|I Don't Want to Miss a Thing
Vanessa Carlton|A Thousand Miles
Shakira|Try Everything
Sia|Never Give Up
Pharrell Williams|Happy
Justin Timberlake|Can't Stop the Feeling!
Ariana Grande|Beauty and the Beast
Kristen Bell|For the First Time in Forever
Jonathan Groff|Reindeer(s) Are Better Than People
Tim Curry|Sweet Transvestite
Bill Medley|(I've Had) The Time of My Life
Starship|Nothing's Gonna Stop Us Now
Hans Zimmer|Time
Hans Zimmer|He's a Pirate
John Williams|Imperial March
John Williams|Hedwig's Theme
Ennio Morricone|The Good, the Bad and the Ugly
The Black Eyed Peas|Pump It
Eminem|Lose Yourself
Queen|Bohemian Rhapsody
Los Del Río|Macarena
Gloria Gaynor|I Will Survive
Bee Gees|Stayin' Alive
`);

  add("retro", "🕺", "Hits de los 80 y 90", `
Michael Jackson|Billie Jean
Michael Jackson|Thriller
Michael Jackson|Beat It
Michael Jackson|Smooth Criminal
Michael Jackson|Bad
Michael Jackson|Don't Stop 'Til You Get Enough
Michael Jackson|Black or White
Madonna|Like a Virgin
Madonna|La Isla Bonita
Madonna|Vogue
Madonna|Hung Up
Whitney Houston|I Wanna Dance with Somebody (Who Loves Me)
George Michael|Careless Whisper
George Michael|Faith
Cyndi Lauper|Girls Just Want to Have Fun
Cyndi Lauper|Time After Time
a-ha|Take On Me
Backstreet Boys|I Want It That Way
Backstreet Boys|Everybody (Backstreet's Back)
Backstreet Boys|As Long as You Love Me
*NSYNC|Bye Bye Bye
*NSYNC|It's Gonna Be Me
Spice Girls|Wannabe
Spice Girls|Spice Up Your Life
Cher|Believe
Destiny's Child|Survivor
Destiny's Child|Say My Name
TLC|No Scrubs
TLC|Waterfalls
Ace of Base|The Sign
Haddaway|What Is Love
Snap!|Rhythm Is a Dancer
Vengaboys|Boom, Boom, Boom, Boom!!
Lou Bega|Mambo No. 5 (A Little Bit of...)
Toto|Africa
Journey|Don't Stop Believin'
Billy Joel|Piano Man
Kool & The Gang|Celebration
Earth, Wind & Fire|September
ABBA|Dancing Queen
ABBA|Mamma Mia
ABBA|Gimme! Gimme! Gimme!
Donna Summer|I Feel Love
Village People|Y.M.C.A.
Rick Astley|Never Gonna Give You Up
Prince|Purple Rain
Wham!|Last Christmas
Bonnie Tyler|Total Eclipse of the Heart
Europe|The Final Countdown
Bee Gees|Night Fever
Eurythmics|Sweet Dreams (Are Made of This)
Depeche Mode|Enjoy the Silence
The Cure|Friday I'm in Love
Duran Duran|Hungry Like the Wolf
Simple Minds|Don't You (Forget About Me)
Tears for Fears|Everybody Wants to Rule the World
Dexys Midnight Runners|Come On Eileen
Roxette|It Must Have Been Love
Roxette|The Look
Sinéad O'Connor|Nothing Compares 2 U
Alanis Morissette|Ironic
Oasis|Wonderwall
Blur|Song 2
Smash Mouth|All Star
Third Eye Blind|Semi-Charmed Life
Bon Jovi|Livin' on a Prayer
Guns N' Roses|Sweet Child O' Mine
`);

  add("folklore", "🪕", "Folklore y tango", `
Mercedes Sosa|Gracias a la Vida
Mercedes Sosa|Solo le Pido a Dios
Mercedes Sosa|Todo Cambia
Mercedes Sosa|Alfonsina y el Mar
Carlos Gardel|Volver
Carlos Gardel|Mi Buenos Aires Querido
Carlos Gardel|Por una Cabeza
Carlos Gardel|El Día Que Me Quieras
Carlos Gardel|Cuesta Abajo
Astor Piazzolla|Libertango
Astor Piazzolla|Oblivion
Astor Piazzolla|Adiós Nonino
Atahualpa Yupanqui|Los Ejes de Mi Carreta
Atahualpa Yupanqui|Luna Tucumana
Horacio Guarany|Si Se Calla el Cantor
León Gieco|Solo le Pido a Dios
León Gieco|Sólo Le Pido a Dios
León Gieco|Cinco Siglos Igual
León Gieco|La Colina de la Vida
Los Chalchaleros|Zamba de Mi Esperanza
Roberto Goyeneche|Balada para un Loco
Julio Sosa|La Cumparsita
Aníbal Troilo|Quejas de Bandoneón
Carlos Di Sarli|Bahía Blanca
Bajofondo|Pa' Bailar
Bajofondo|Mi Corazón
Gotan Project|Santa María (Del Buen Ayre)
Gotan Project|Una Música Brutal
Vicentico|Algo Contigo
Los Manseros Santiagueños|Chacarera del Rancho
Divididos|Ala Delta
`);

  add("mundial", "🏟️", "Mundial y cancha", `
La Mosca|Muchachos, Ahora Nos Volvimos a Ilusionar
Shakira|Waka Waka (This Time for Africa)
K'naan|Wavin' Flag
Ricky Martin|La Copa de la Vida
Queen|We Are the Champions
Queen|We Will Rock You
The White Stripes|Seven Nation Army
Pitbull|We Are One (Ole Ola)
Jennifer Lopez|On the Floor
Nicky Jam|Live It Up
Trinidad Cardona|Hayya Hayya (Better Together)
Ozuna|Arhbo
Nicki Minaj|Tukoh Taka
Rodrigo|La Mano de Dios
Los Fabulosos Cadillacs|Vasos Vacíos
Los Piojos|Maradó
Boca Juniors|Soy de Boca
Los Auténticos Decadentes|Los Piratas
Soda Stereo|De Música Ligera
Fito Páez|Un Vestido y un Amor
Charly García|Los Dinosaurios
Gianluca Grignani|Falco a Metà
Daddy Yankee|Gasolina
Maná|Rayando el Sol
Enrique Iglesias|Bailando
Estopa|Como Camarón
`);

  add("electro", "🎹", "Electrónica y dance", `
Daft Punk|One More Time
Daft Punk|Get Lucky
Daft Punk|Harder, Better, Faster, Stronger
Daft Punk|Around the World
Avicii|Wake Me Up
Avicii|Levels
Avicii|Hey Brother
Calvin Harris|Summer
Calvin Harris|This Is What You Came For
Calvin Harris|Feel So Close
David Guetta|Titanium
David Guetta|When Love Takes Over
David Guetta|Memories
Swedish House Mafia|Don't You Worry Child
Martin Garrix|Animals
Martin Garrix|In the Name of Love
Zedd|Clarity
Zedd|Stay
Kygo|Firestone
Major Lazer|Lean On
Major Lazer|Cold Water
Marshmello|Happier
Marshmello|Alone
The Chainsmokers|Closer
The Chainsmokers|Don't Let Me Down
Alan Walker|Faded
Skrillex|Scary Monsters and Nice Sprites
Deadmau5|Ghosts 'n' Stuff
Tiësto|The Business
Tiësto|Adagio for Strings
Robin Schulz|Sugar
Clean Bandit|Rather Be
Clean Bandit|Rockabye
Disclosure|Latch
Fatboy Slim|Praise You
The Prodigy|Firestarter
Darude|Sandstorm
Eiffel 65|Blue (Da Ba Dee)
Lost Frequencies|Are You with Me
Mark Ronson|Uptown Funk
Kungs|This Girl
Gryffin|Feel Good
Cascada|Evacuate the Dancefloor
Safri Duo|Played-A-Live
Benny Benassi|Satisfaction
Armin van Buuren|This Is What It Feels Like
Axwell /\ Ingrosso|More Than You Know
Fisher|Losing It
Peggy Gou|(It Goes Like) Nanana
Dua Lipa|Levitating
Bizarrap|Quevedo: Bzrp Music Sessions, Vol. 52
`);

  add("hiphop", "🎤", "Hip hop y R&B", `
Dr. Dre|Still D.R.E.
Snoop Dogg|Drop It Like It's Hot
50 Cent|In da Club
50 Cent|Candy Shop
Jay-Z|Empire State of Mind
Kanye West|Stronger
Kanye West|Gold Digger
Kanye West|Heartless
Lil Wayne|A Milli
Lil Wayne|Lollipop
Nelly|Hot in Herre
Ludacris|Stand Up
OutKast|Hey Ya!
OutKast|Ms. Jackson
Missy Elliott|Get Ur Freak On
Alicia Keys|Fallin'
Alicia Keys|No One
Alicia Keys|If I Ain't Got You
Mary J. Blige|Family Affair
Ne-Yo|So Sick
Chris Brown|Run It!
Chris Brown|Forever
T.I.|Whatever You Like
Akon|Smack That
Akon|Lonely
Sean Paul|Temperature
Sean Paul|Get Busy
Fetty Wap|Trap Queen
Drake|Passionfruit
Cardi B|Bodak Yellow
Cardi B|WAP
Megan Thee Stallion|Savage
Post Malone|Congratulations
Migos|Bad and Boujee
Lil Uzi Vert|XO Tour Llif3
XXXTENTACION|SAD!
Juice WRLD|Lucid Dreams
Travis Scott|goosebumps
21 Savage|a lot
DMX|Party Up (Up in Here)
The Notorious B.I.G.|Juicy
2Pac|California Love
2Pac|Changes
Wiz Khalifa|Black and Yellow
Kid Cudi|Day 'n' Nite
Childish Gambino|This Is America
Eminem|Stan
Eminem|Mockingbird
Eminem|The Real Slim Shady
Beyoncé|Formation
Rihanna|Work
`);

  add("baladas", "💔", "Baladas románticas", `
Luis Miguel|La Incondicional
Luis Miguel|Ahora Te Puedes Marchar
Luis Miguel|Por Debajo de la Mesa
Luis Miguel|Hasta Que Me Olvides
Luis Miguel|Cuando Calienta el Sol
Luis Miguel|La Bikina
Juan Gabriel|Amor Eterno
Juan Gabriel|Hasta Que Te Conocí
Juan Gabriel|Querida
José José|El Triste
José José|Almohada
Camilo Sesto|Vivir Así Es Morir de Amor
Franco De Vita|Te Amo
Franco De Vita|Louis
Ricardo Montaner|La Cima del Cielo
Alejandro Fernández|Me Dediqué a Perderte
Alejandro Fernández|Hoy Tengo Ganas de Ti
Marco Antonio Solís|Si No Te Hubieras Ido
Marco Antonio Solís|Tu Cárcel
Roberto Carlos|Amigo
Roberto Carlos|Detalles
Roberto Carlos|Cama y Mesa
Cristian Castro|Azul
Cristian Castro|Lloran las Rosas
Cristian Castro|Por Amarte Así
Chayanne|Salomé
Ricky Martin|Tu Recuerdo
Ricardo Arjona|Historia de Taxi
Il Divo|Regresa a Mí
Andrea Bocelli|Con Te Partirò
Julio Iglesias|Me Olvidé de Vivir
Julio Iglesias|La Nave del Olvido
Sandro|Una Muchacha y una Guitarra
Camila|Mientes
Reik|Creo en Ti
Reik|Yo Quisiera
Pimpinela|Olvídame y Pega la Vuelta
Nino Bravo|Libre
Nino Bravo|Un Beso y una Flor
Rocío Dúrcal|Amor Eterno
Los Ángeles Negros|Y Volveré
Los Panchos|Contigo
Armando Manzanero|Somos Novios
Los Bukis|Y Ahora Te Vas
Joan Sebastian|Secreto de Amor
Yuri|Maldita Primavera
Emmanuel|Toda la Vida
`);

  add("salsa", "🌴", "Salsa, merengue y tropical", `
Celia Cruz|La Vida Es un Carnaval
Celia Cruz|Quimbara
Marc Anthony|Flor Pálida
Marc Anthony|Y Hubo Alguien
Gilberto Santa Rosa|Conteo Regresivo
Juan Luis Guerra|La Bilirrubina
Juan Luis Guerra|Burbujas de Amor
Juan Luis Guerra|Ojalá Que Llueva Café
Juan Luis Guerra|Bachata Rosa
Carlos Vives|La Bicicleta
Carlos Vives|Fruta Fresca
Carlos Vives|La Tierra del Olvido
Elvis Crespo|Suavemente
Grupo Niche|Cali Pachanguero
Grupo Niche|Una Aventura
Willie Colón|Idilio
Héctor Lavoe|El Cantante
Rubén Blades|Pedro Navaja
Rubén Blades|Plástico
Oscar D'León|Llorarás
Tito Puente|Oye Como Va
Santana|Smooth
Santana|Maria Maria
Gente de Zona|La Gozadera
Jerry Rivera|Amores Como el Nuestro
Los Van Van|Sandunguera
Buena Vista Social Club|Chan Chan
Buena Vista Social Club|Dos Gardenias
Aventura|Obsesión
Aventura|Un Beso
Romeo Santos|Eres Mía
Prince Royce|Darte un Beso
Xtreme|Te Extraño
Monchy y Alexandra|Dos Locos
Wilfrido Vargas|El Jardinero
Fonseca|Te Mando Flores
Ráfaga|Mentirosa
Marc Anthony|Vivir Mi Vida
`);

  add("indie", "🎧", "Indie y rock alternativo", `
Arctic Monkeys|505
Arctic Monkeys|Why'd You Only Call Me When You're High?
Arctic Monkeys|Fluorescent Adolescent
The Kooks|Naive
The Kooks|She Moves in Her Own Way
The Strokes|Reptilia
The Strokes|Someday
Franz Ferdinand|Take Me Out
Vampire Weekend|A-Punk
MGMT|Kids
MGMT|Electric Feel
Phoenix|1901
Tame Impala|Let It Happen
Foster the People|Pumped Up Kicks
The Black Keys|Lonely Boy
The Black Keys|Gold on the Ceiling
Two Door Cinema Club|What You Know
Cage the Elephant|Ain't No Rest for the Wicked
Cage the Elephant|Cigarette Daydreams
Gorillaz|Feel Good Inc.
Gorillaz|Clint Eastwood
Yeah Yeah Yeahs|Heads Will Roll
Bloc Party|Helicopter
Arcade Fire|Wake Up
Radiohead|Karma Police
Radiohead|No Surprises
Beck|Loser
Pixies|Where Is My Mind?
Lana Del Rey|Summertime Sadness
Lana Del Rey|Video Games
Lana Del Rey|Born to Die
Lorde|Green Light
Florence + The Machine|Dog Days Are Over
Florence + The Machine|Shake It Out
Hozier|Take Me to Church
The Neighbourhood|Sweater Weather
Mac DeMarco|Chamber of Reflection
Zoé|Labios Rotos
Zoé|Soñé
Aterciopelados|Bolero Falaz
Babasónicos|Putita
Él Mató a un Policía Motorizado|Chica Rutera
Cuarteto de Nos|Cumpleaños
The Cardigans|Lovefool
Weezer|Buddy Holly
Weezer|Island in the Sun
Vance Joy|Riptide
Of Monsters and Men|Little Talks
`);

  add("metal", "🤘", "Metal y hard rock", `
Iron Maiden|The Trooper
Iron Maiden|Run to the Hills
Iron Maiden|Fear of the Dark
Black Sabbath|Paranoid
Black Sabbath|Iron Man
Judas Priest|Breaking the Law
Ozzy Osbourne|Crazy Train
Ozzy Osbourne|Mama, I'm Coming Home
Slipknot|Duality
Slipknot|Psychosocial
Pantera|Walk
Megadeth|Symphony of Destruction
Slayer|Raining Blood
Motörhead|Ace of Spades
Scorpions|Wind of Change
Scorpions|Still Loving You
Def Leppard|Pour Some Sugar on Me
Mötley Crüe|Kickstart My Heart
Whitesnake|Here I Go Again
Van Halen|Jump
Van Halen|Panama
Twisted Sister|We're Not Gonna Take It
KISS|I Was Made for Lovin' You
KISS|Rock and Roll All Nite
Deep Purple|Smoke on the Water
Rammstein|Du Hast
Rammstein|Sonne
Rammstein|Ich Will
Disturbed|Down with the Sickness
Disturbed|The Sound of Silence
Avenged Sevenfold|Bat Country
Avenged Sevenfold|Nightmare
Bullet for My Valentine|Tears Don't Fall
Three Days Grace|I Hate Everything About You
Papa Roach|Last Resort
Korn|Blind
Korn|Freak on a Leash
Sepultura|Roots Bloody Roots
Sepultura|Refuse/Resist
Rata Blanca|La Leyenda del Hada y el Mago
V8|Destrucción
Metallica|Fuel
Metallica|The Unforgiven
Guns N' Roses|Don't Cry
Guns N' Roses|Patience
Nickelback|How You Remind Me
Nickelback|Photograph
`);

  add("kpop", "🇰🇷", "K-pop y fenómenos globales", `
BTS|Dynamite
BTS|Butter
BTS|Boy With Luv
BTS|Fake Love
BTS|Life Goes On
BLACKPINK|DDU-DU DDU-DU
BLACKPINK|Kill This Love
BLACKPINK|How You Like That
BLACKPINK|Pink Venom
PSY|Gentleman
Stray Kids|God's Menu
NewJeans|Hype Boy
NewJeans|Ditto
TWICE|Cheer Up
TWICE|What Is Love?
EXO|Growl
BIGBANG|Fantastic Baby
Super Junior|Sorry, Sorry
Girls' Generation|Gee
Jimin|Like Crazy
ROSÉ|On The Ground
aespa|Next Level
ITZY|DALLA DALLA
Lady Gaga|Alejandro
Lady Gaga|Born This Way
Taylor Swift|Bad Blood
Katy Perry|Last Friday Night
`);

  add("regional", "🪗", "Cumbia mexicana y regional", `
Natanael Cano|Soy el Diablo
Eslabon Armado|Ella Baila Sola
Grupo Frontera|No Se Va
Fuerza Regida|Bebe Dame
Banda MS|Mi Razón de Ser
Banda MS|Hermosa Experiencia
Los Tigres del Norte|La Puerta Negra
Los Tigres del Norte|La Jaula de Oro
Los Tigres del Norte|Contrabando y Traición
Vicente Fernández|Volver, Volver
Vicente Fernández|El Rey
Vicente Fernández|Por Tu Maldito Amor
Pedro Infante|Amorcito Corazón
Selena|Bidi Bidi Bom Bom
Selena|Como la Flor
Selena|Amor Prohibido
Los Temerarios|Te Hice Mal
Los Ángeles Azules|Nunca Es Suficiente
Mariachi Vargas de Tecalitlán|El Son de la Negra
Juan Gabriel|El Noa Noa
Christian Nodal|Adiós Amor
Christian Nodal|Botella Tras Botella
Ramón Ayala|Tragos Amargos
Rocío Dúrcal|Costumbres
Jenni Rivera|Ya Lo Sé
Jenni Rivera|La Gran Señora
`);

  add("anime-op", "🍥", "Openings de anime y juegos", `
Hironobu Kageyama|Cha-La Head-Cha-La
Linked Horizon|Guren no Yumiya
LiSA|Gurenge
LiSA|Crossing Field
YUI|Again
KANA-BOON|Silhouette
TK from Ling tosite sigure|Unravel
YOASOBI|Yoru ni Kakeru
YOASOBI|Idol
Ado|Usseewa
Kenshi Yonezu|Lemon
Kenshi Yonezu|KICK BACK
Official HIGE DANdism|Pretender
Official HIGE DANdism|Mixed Nuts
Aimer|Zankyosanka
MAN WITH A MISSION|Database
MAKE-UP|Pegasus Fantasy
ASIAN KUNG-FU GENERATION|Haruka Kanata
FLOW|GO!!!
FLOW|Sign
ORANGE RANGE|Asterisk
Eve|Kaikai Kitan
JAM Project|The Hero!!
Masatoshi Ono|Departure!
Yoko Takahashi|A Cruel Angel's Thesis
Crush 40|Live & Learn
Crush 40|Sonic Heroes
Ayumi Miyazaki|Brave Heart
Mrs. GREEN APPLE|Inferno
King Gnu|Hakujitsu
Creepy Nuts|Bling-Bang-Bang-Born
Fujii Kaze|Shinunoga E-Wa
`);

  add("navidad", "🎄", "Navidad y fiestas", `
Mariah Carey|All I Want for Christmas Is You
Michael Bublé|It's Beginning to Look a Lot Like Christmas
Michael Bublé|Jingle Bells
Bing Crosby|White Christmas
Brenda Lee|Rockin' Around the Christmas Tree
Andy Williams|It's the Most Wonderful Time of the Year
Band Aid|Do They Know It's Christmas?
John Lennon|Happy Xmas (War Is Over)
José Feliciano|Feliz Navidad
Boney M.|Mary's Boy Child - Oh My Lord
Kelly Clarkson|Underneath the Tree
Ariana Grande|Santa Tell Me
Justin Bieber|Mistletoe
Elvis Presley|Blue Christmas
Dean Martin|Let It Snow! Let It Snow! Let It Snow!
Pentatonix|Little Drummer Boy
Stevie Wonder|Happy Birthday
Shakin' Stevens|Merry Christmas Everyone
The Pogues|Fairytale of New York
Slade|Merry Xmas Everybody
Wham!|Last Christmas
Paul McCartney|Wonderful Christmastime
Sia|Santa's Coming for Us
Coldplay|Christmas Lights
Luis Miguel|Navidad Navidad
`);

  add("clasicos70", "📻", "Clásicos de los 60 y 70", `
Fleetwood Mac|Dreams
Fleetwood Mac|Go Your Own Way
David Bowie|Heroes
David Bowie|Space Oddity
David Bowie|Let's Dance
Elton John|Rocket Man
Elton John|Your Song
Elton John|I'm Still Standing
Stevie Wonder|Superstition
Stevie Wonder|I Just Called to Say I Love You
Marvin Gaye|Let's Get It On
Marvin Gaye|What's Going On
Bob Dylan|Like a Rolling Stone
Bob Dylan|Blowin' in the Wind
Simon & Garfunkel|The Sound of Silence
Simon & Garfunkel|Mrs. Robinson
The Beach Boys|Good Vibrations
The Beach Boys|God Only Knows
The Doors|Light My Fire
The Doors|Riders on the Storm
Jimi Hendrix|Purple Haze
Jimi Hendrix|All Along the Watchtower
Creedence Clearwater Revival|Fortunate Son
Creedence Clearwater Revival|Have You Ever Seen the Rain?
The Who|Baba O'Riley
The Who|My Generation
Lynyrd Skynyrd|Sweet Home Alabama
Lynyrd Skynyrd|Free Bird
Bob Seger|Old Time Rock & Roll
Chuck Berry|Johnny B. Goode
Elvis Presley|Can't Help Falling in Love
Elvis Presley|Jailhouse Rock
Ray Charles|Hit the Road Jack
Frank Sinatra|My Way
Frank Sinatra|Fly Me to the Moon
Nat King Cole|L-O-V-E
The Police|Roxanne
The Police|Every Breath You Take
Dire Straits|Sultans of Swing
Dire Straits|Money for Nothing
Phil Collins|In the Air Tonight
Phil Collins|Against All Odds
Supertramp|The Logical Song
Supertramp|Breakfast in America
Boston|More Than a Feeling
Foreigner|I Want to Know What Love Is
Foreigner|Cold as Ice
Heart|Barracuda
Blondie|Heart of Glass
Blondie|Call Me
Carpenters|Close to You
John Denver|Take Me Home, Country Roads
Eric Clapton|Tears in Heaven
Eric Clapton|Layla
Santana|Black Magic Woman
Cat Stevens|Wild World
Don McLean|American Pie
Neil Diamond|Sweet Caroline
The Beatles|Don't Let Me Down
The Beatles|Blackbird
The Beatles|Yellow Submarine
Queen|Killer Queen
Led Zeppelin|Immigrant Song
Rod Stewart|Maggie May
`);

  add("reggae", "🟢", "Reggae y ska", `
Bob Marley & The Wailers|One Love / People Get Ready
Bob Marley & The Wailers|Three Little Birds
Bob Marley & The Wailers|No Woman, No Cry
Bob Marley & The Wailers|Is This Love
Bob Marley & The Wailers|Redemption Song
Bob Marley & The Wailers|Could You Be Loved
UB40|Red Red Wine
UB40|Can't Help Falling in Love
Peter Tosh|Legalize It
Jimmy Cliff|The Harder They Come
Toots & The Maytals|Pressure Drop
Damian Marley|Welcome to Jamrock
Cultura Profética|La Complicidad
Natiruts|Presente de Um Beija-Flor
Matisyahu|King Without a Crown
Sublime|Santeria
Sublime|What I Got
The Police|Walking on the Moon
No Doubt|Don't Speak
No Doubt|Just a Girl
The Specials|Ghost Town
Madness|Our House
Ziggy Marley|Tomorrow People
Los Pericos|Pupilas Lejanas
Los Pericos|Runaway
Eddy Grant|Electric Avenue
Inner Circle|Bad Boys
Shaggy|Boombastic
`);

  add("pop-latino", "🌟", "Pop latino de los 90 y 2000", `
Thalía|Piel Morena
Thalía|Arrasando
Thalía|Entre el Mar y una Estrella
Paulina Rubio|Te Quise Tanto
Paulina Rubio|Mía
Paulina Rubio|Ni Rosas Ni Juguetes
Paulina Rubio|Alma en Libertad
Belinda|Luz Sin Gravedad
Belinda|Bella Traición
Belinda|Egoísta
Anahí|Mi Delirio
Dulce María|Inevitable
Camila|Todo Cambió
Camila|De Mí
Julieta Venegas|Me Voy
Julieta Venegas|Limón y Sal
Natalia Lafourcade|Hasta la Raíz
Natalia Lafourcade|Tú Sí Sabes Quererme
Fanny Lu|Tú No Eres para Mí
Shakira|Pies Descalzos, Sueños Blancos
Shakira|Suerte
Shakira|Hay Amores
Alejandro Sanz|No Es lo Mismo
Alejandro Sanz|Y, ¿Si Fuera Ella?
Gloria Trevi|Todos Me Miran
Gloria Trevi|Pelo Suelto
Lucero|Electricidad
Alejandra Guzmán|Hacer el Amor con Otro
Mónica Naranjo|Sobreviviré
Amaral|Sin Ti No Soy Nada
Amaral|Te Necesito
Pablo Alborán|Solamente Tú
Pablo Alborán|Saturno
Dani Martín|Cero
Melendi|Tu Jardín con Enanitos
Melendi|Barbie de Extrarradio
Estopa|Como Camarón
Estopa|La Raja de Tu Falda
Estopa|Vino Tinto
Fito & Fitipaldis|Por la Boca Vive el Pez
Manu Chao|Me Gustas Tú
Manu Chao|Clandestino
Manu Chao|Bongo Bong
El Canto del Loco|Zapatillas
El Canto del Loco|Besos
La Quinta Estación|El Sol No Regresa
Marta Sánchez|Desesperada
Álex Ubago|Sin Miedo a Nada
David Bisbal|Ave María
David Bisbal|Bulería
Merche|Abre Tu Mente
Las Ketchup|Aserejé
Enrique Iglesias|Experiencia Religiosa
Ricky Martin|She Bangs
Shakira|La Tortura
Maná|Eres Mi Religión
Sin Bandera|Mientes Tan Bien
`);

  add("intros-es", "📺", "Openings y temas en español latino", `
Dragon Ball Z|Cha-La Head-Cha-La (Opening latino)
Dragon Ball Z|Ángeles Fuimos (Ending latino)
Dragon Ball Super|Limit Break X Survivor (Opening latino)
Dragon Ball GT|Mi Corazón Encantado (Opening latino)
Dragon Ball GT|Opening latino
One Piece|El Sake de Binks (Opening latino)
Los Caballeros del Zodiaco|Pegasus Fantasy (Opening latino)
Los Caballeros del Zodiaco|Pegasus Fantasy (Cover latino)
Supercampeones|Moete Hero (Opening latino)
Pokémon|Tengo que ser un maestro Pokémon
Digimon|Butterfly (Opening latino)
Digimon Frontier|Fire! (Opening)
Sailor Moon|Luz de Luna (Opening latino)
Naruto|Haruka Kanata (Opening latino)
Naruto Shippuden|Silhouette (Opening latino)
Naruto Shippuden|Blue Bird (Opening latino)
Naruto Shippuden|Lovers (Opening latino)
Inuyasha|Owarinai Yume (Opening latino)
Inuyasha|Grip! (Opening latino)
Samurai X|Sobakasu (Opening latino)
Samurai X|Cuando las Lágrimas
Beyblade|Let It Rip! (Opening latino)
Beyblade|Let's Beyblade! (Opening latino)
Candy Candy|Tema de apertura
Sakura Card Captors|Yo Te Atrapo, Tú Me Atrapas (Opening latino)
Sakura Card Captors|Groovy (Ending latino)
Hunter x Hunter|Ohayou (Opening latino)
Shaman King|Over Soul (Opening latino)
Mazinger Z|Opening latino
Los Padrinos Mágicos|Mientras Vueles Conmigo
Las Chicas Superpoderosas|Tema final
Bob Esponja|Canción inicial
Los Pitufos|Somos los Pitufos
La Abeja Maya|En un país multicolor
Los Picapiedra|Tema (Los Pequeños Picapiedra)
Patito Feo|Las Divinas
Violetta|En mi mundo (en vivo)
Frozen|Libre soy
Frozen|Libre soy (versión Violetta)
El Rey León|Hakuna Matata
El Rey León|El ciclo sin fin
Aladdín|Un mundo ideal
La Sirenita|Bajo el mar
Pocahontas|Colores en el viento
Mulán|Reflejo
Toy Story|Yo soy tu amigo fiel
Toy Story|Yo soy tu amigo fiel (Tatiana)
Coco|Recuérdame
Coco|Un poco loco
Encanto|No se habla de Bruno
Encanto|La familia Madrigal
Encanto|Dos Oruguitas
El Libro de la Selva|Busca lo más vital
Mary Poppins|Supercalifragilisticoespialidoso
`);

  add("intros-en", "🎬", "Intros de series y películas", `
Los Simpson|Tema principal
Padre de Familia|Tema principal
Rick y Morty|Tema principal
Yu-Gi-Oh!|Tema principal
Power Rangers|Go Go Power Rangers
Los Jóvenes Titanes|Tema principal
Phineas y Ferb|Hoy va a ser un gran día
Kim Possible|Call Me, Beep Me!
Los Magos de Waverly Place|Tema principal
iCarly|Leave It All to Me
Drake y Josh|Found a Way
Lizzie McGuire|Why Not
High School Musical|Start of Something New
Las Tortugas Ninja|Tema (1987)
Transformers|Tema principal
La Pantera Rosa|Tema principal
Batman|Tema (serie de 1966)
Patoaventuras|Tema principal
Friends|I'll Be There for You
Game of Thrones|Main Title
La Casa de Papel|Bella Ciao
La Casa de Papel|My Life Is Going On
Narcos|Tuyo
Breaking Bad|Tema principal
Dr. House|Teardrop
Peaky Blinders|Red Right Hand
El Juego del Calamar|Pink Soldiers
Stranger Things|Tema principal
Star Wars|Título principal
Jurassic Park|Tema principal
Indiana Jones|Raiders March
Misión Imposible|Tema principal
James Bond|Tema principal
Top Gun|Top Gun Anthem
Rocky|Gonna Fly Now
Superman|Tema principal
El Padrino|Tema de amor
El Señor de los Anillos|Concerning Hobbits
Harry Potter|Hedwig's Theme
Piratas del Caribe|He's a Pirate
Evita|No llores por mí, Argentina
Cars|Life Is a Highway
Madagascar|I Like to Move It
Shrek|All Star
Mi Pobre Angelito|Somewhere in My Memory
Volver al Futuro|Tema principal
`);

  window.MUSIQUITA_CATS = R;
})();
