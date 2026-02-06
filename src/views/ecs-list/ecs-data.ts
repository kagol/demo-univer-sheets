const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

function randomUUID() {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const defaultTableData = numbers.map(() => {
  return {
    name: 'ecs-' + randomUUID(), id: randomUUID(),
    monitor: '', security: '安全',
    status: '运行中', availableArea: '可用区1',
    spec: '1vCPUs | 1GiB | t6.small.1', image: 'Ubuntu 25.04 server 64bit', os: 'Linux',
    publicIp: '0.0.0.0', privateIp: '192.168.0.1',
    billingMode: '按需计费', tag: '可用', createTime: '2025/07/01 11:11:00 GMT+08:00 创建'
  }
})

function getRandomElements(arr, count) {
  if (count > arr.length) {
    return 'error'
  }

  const shuffled = arr.slice(0)
  const result = []
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * shuffled.length)
    result.push(shuffled.splice(randomIndex, 1)[0])
  }

  return result
}

function getRandomInt() {
  return Math.floor(Math.random() * 10 + 1)
}

export const randomTableData = getRandomElements(defaultTableData, getRandomInt())
