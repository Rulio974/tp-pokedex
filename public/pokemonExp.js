

Vue.component('pokemonExp', {

    props: ['pokemon'],
    template:
    `

    <v-row>
    <v-col>
    <v-spacer></v-spacer>
        <v-img width="150" class="ma-4 " min :src="'images/'+pokemon.image"></v-img>

        <v-container class = " d-flex space-around">
            <v-row class = "d-flex space-around">
                    <v-sheet :color=type.couleur class="rounded-pill pa-3 ma-3" align="center" justify="center" v-for = "type in pokemon.types"><strong>{{type.nom}}</strong> </v-sheet>
            </v-row>
        </v-container>
    </v-col>
    <v-col>
        <v-text><h4>{{pokemon.description}}</h4></v-text>
        <v-simple-table>
            <tbody>

                <tr>
                    <td>HP</td>
                    <td>{{pokemon.base.HP}}</td>
                </tr>
                <tr>
                    <td>Attaque</td>
                    <td>{{pokemon.base.Attack}}</td>
                </tr>
                <tr>
                    <td>Défense</td>
                    <td>{{pokemon.base.Defense}}</td>
                </tr>
                <tr>
                    <td>Défense</td>
                    <td>{{pokemon.base.Defense}}</td>
                </tr>
                <tr>
                    <td>Attaque Spéciale</td>
                    <td>{{pokemon.base.SpAttack}}</td>
                </tr>
                <tr>
                    <td>Défense Spéciale</td>
                    <td>{{pokemon.base.SpDefense}}</td>
                </tr>
                <tr>
                    <td>Vitesse</td>
                    <td>{{pokemon.base.Speed}}</td>
                </tr>

            </tbody>
        </v-simple-table>


    </v-col>
    </v-row>
	




    



`


});