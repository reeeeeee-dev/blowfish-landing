<script setup lang="ts">
import InfoBlock from './InfoBlock.vue'
</script>

<template>
  <div class="row">
    <InfoBlock>
      <template #heading>Alternative rock</template>
      Alternative rock entered the musical mainstream and many alternative bands became commercially
      successful during the 1990s.
    </InfoBlock>

    <InfoBlock>
      <template #heading>Alternative metal</template>
      In the early 1990s a new style of alternative music emerged, which combined elements of
      alternative rock with heavy metal.
    </InfoBlock>

    <InfoBlock>
      <template #heading>Grunge</template>
      Music was born out of the Pacific Northwest American states of Washington and Oregon in the
      1980s.
    </InfoBlock>

    <InfoBlock>
      <template #heading>Post-grunge</template>
      In 1995, former Nirvana drummer Dave Grohl's new band, the Foo Fighters, helped popularize the
      genre and define its parameters.
    </InfoBlock>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
