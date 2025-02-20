<script setup>
const nodes = ref([
  { id: '1', label: 'Left 1', position: { x: 0, y: 100 }, type: 'default' },
  { id: '2', label: 'Left 2', position: { x: 0, y: 200 }, type: 'default' },
  { id: '3', label: 'Center', position: { x: 200, y: 150 }, type: 'default' },
  { id: '4', label: 'Right 1', position: { x: 400, y: 100 }, type: 'default' },
  { id: '5', label: 'Right 2', position: { x: 400, y: 200 }, type: 'default' },
  { id: '6', label: 'Special Up', position: { x: 200, y: 0 }, type: 'special' },
  { id: '7', label: 'Special Down', position: { x: 200, y: 300 }, type: 'special' },
])

const edges = ref([
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e3-6', source: '3', target: '6', type: 'special-edge' },
  { id: 'e3-7', source: '3', target: '7', type: 'special-edge' },
])
</script>

<template>
  <div class="flex-1 flex items-center justify-center bg-red-200">
    <div class="w-2/6 h-2/6 bg-green-200 flex item-center justify-center">
      <VueFlow v-model:nodes="nodes" v-model:edges="edges">
        <template #node-special="{ data }">
          <div class="bg-blue-500 text-black p-2 rounded">
            {{ data.label }}
          </div>
        </template>
        <template #edge-special-edge>
          <path class="text-red-200 bg-red-200 s" />
        </template>
      </VueFlow>
    </div>
  </div>
</template>
