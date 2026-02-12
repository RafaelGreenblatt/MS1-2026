<!-- Source data can be edited in /data/diary.csv -->

<script setup>
import { data } from './data/csv.data.ts'

const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Calendario/diario delle Lezioni

Questo è un calendario provvisorio delle lezioni del corso, che sarà aggiornato con programmi più accurati e finalmente con le lezioni realmente erogate.

La dicitura FV indica le sezioni relativi del testo di riferenza ([Friedli e Velenik])(https://www.unige.ch/math/folks/velenik/smbook/).

IMPORTANTE: anche l'orario del corso è da confermare, e probabilmente sarà cambiato entro l'inizio delle lezioni.



<div v-if="data.diary">
<div v-for="week in weeks">

### Settimana {{ week }}

<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    <div v-if="diaryItem.time">
    {{ diaryItem.date }}, {{ diaryItem.time }}, {{ diaryItem.room }}:  {{ diaryItem.topic }}
    </div>
    <div v-else>  <b> {{ diaryItem.date }}:  {{ diaryItem.topic }} </b> </div>
  </li>
</ul>

</div>
</div>


