<template>
  <div class="w-full h-full flex items-center justify-center p-8 bg-gray-50">
    <div class="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Estadísticas por Rol</h2>
      <canvas ref="roleChart" class="w-full h-[400px]"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEmploy } from '@/composables/useEmploys'

const roleChart = ref(null)
const { fetchStatistics } = useEmploy()

onMounted(async () => {
  const statistics = await fetchStatistics()

  const ctx = roleChart.value.getContext('2d')

  const colors = ['#0ea5e9', '#8b5cf6', '#f43f5e', '#10b981', '#f59e0b', '#6366f1']
  const roles = Object.keys(statistics.data)
  const values = Object.values(statistics.data)

  ctx.clearRect(0, 0, roleChart.value.width, roleChart.value.height)

  const margin = 60
  const width = roleChart.value.width - 2 * margin
  const height = roleChart.value.height - 2 * margin
  const barWidth = width / roles.length * 0.8
  const spacing = width / roles.length * 0.2

  const maxValue = Math.max(...values)

  // Add subtle grid lines
  const gridLines = 5
  for (let i = 0; i <= gridLines; i++) {
    const y = margin + (height * (i / gridLines))
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(roleChart.value.width - margin, y)
    ctx.strokeStyle = '#f1f5f9'
    ctx.stroke()
  }

  values.forEach((value, index) => {
    const barHeight = (value / maxValue) * height
    const x = margin + (index * (barWidth + spacing))
    const y = roleChart.value.height - margin - barHeight

    // Draw bar with modern gradient
    const gradient = ctx.createLinearGradient(x, y, x, y + barHeight)
    gradient.addColorStop(0, `${colors[index % colors.length]}dd`)
    gradient.addColorStop(1, `${colors[index % colors.length]}55`)
    ctx.fillStyle = gradient

    // Add rounded corners with larger radius
    const radius = 8
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + barWidth - radius, y)
    ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius)
    ctx.lineTo(x + barWidth, y + barHeight - radius)
    ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth - radius, y + barHeight)
    ctx.lineTo(x + radius, y + barHeight)
    ctx.quadraticCurveTo(x, y + barHeight, x, y + barHeight - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.fill()

    // Add value on top of bar with modern styling
    ctx.fillStyle = '#0f172a'
    ctx.font = '600 14px Inter'
    ctx.textAlign = 'center'
    ctx.fillText(value, x + barWidth / 2, y - 12)

    // Add label below bar with modern styling
    ctx.fillStyle = '#64748b'
    ctx.font = '500 13px Inter'
    ctx.textAlign = 'center'
    ctx.fillText(roles[index], x + barWidth / 2, roleChart.value.height - margin + 20)
  })

  // Draw axes with modern styling
  ctx.lineWidth = 1

  // Y axis
  ctx.beginPath()
  ctx.moveTo(margin, margin)
  ctx.lineTo(margin, roleChart.value.height - margin)
  ctx.strokeStyle = '#e2e8f0'
  ctx.stroke()

  // X axis
  ctx.beginPath()
  ctx.moveTo(margin, roleChart.value.height - margin)
  ctx.lineTo(roleChart.value.width - margin, roleChart.value.height - margin)
  ctx.strokeStyle = '#e2e8f0'
  ctx.stroke()
})
</script>
