const array2object = (arr) => {
  return Object.fromEntries(
    arr.map((value, index) => [index+1, value])
  );
}

export const table2excel = (table) => {
  const excelValue = table.map(item => {
    const {
      name, id, availableArea, status, spec, image, os, privateIp, publicIp, billingMode, createTime
    } = item
    const [cpuStr, memoryStr, instanceType] = spec.split(' | ')
    const cpu = parseInt(cpuStr, 10)
    const memory = parseInt(memoryStr, 10)
    return { 0: { v: name }, 1: { v: id }, 2: { v: '华北-北京四' }, 3: { v: availableArea }, 4: { v: status }, 5: { v: '通用入门型t6' }, 6: { v: instanceType }, 7: { v: cpu }, 8: { v: memory }, 9: { v: image }, 10: { v: image }, 11: { v: os }, 12: { v: privateIp }, 13: { v: '' }, 14: { v: publicIp }, 15: { v: '全动态BGP' }, 16: { v: '' }, 17: { v: '39bacce4-db83-4fca-81d6-e479805a25bc' }, 18: { v: '5' }, 19: { v: '独享' }, 20: { v: '全域弹性公网IP' }, 21: { v: '全域公网带宽ID' }, 22: { v: '全域互联带宽ID' }, 23: { v: 'KVM' }, 24: { v: 'vpc-default-smb' }, 25: { v: '4d39684d-5574-4557-a712-bd7ca770e060' }, 26: { v: 'subnet-default-smb' }, 27: { v: 'bb8bc138-fc04-43be-a9e0-a168f8486234' }, 28: { v: 'Sys-WebServer' }, 29: { v: 'bbf0c414-33cf-4cde-a7c1-19b7e5300c97' }, 30: { v: billingMode }, 31: { v: '竞价类型' }, 32: { v: createTime } }
  })

  return {
    value: {
      0: { 0: { v: '名称' }, 1: { v: 'ID' }, 2: { v: '区域' }, 3: { v: '可用区' }, 4: { v: '状态' }, 5: { v: '实例类型' }, 6: { v: '规格名称' }, 7: { v: 'vCPUs' }, 8: { v: '内存(GiB)' }, 9: { v: '镜像' }, 10: { v: '操作系统' }, 11: { v: '操作系统类型' }, 12: { v: '私有IP地址（IPv4）' }, 13: { v: '私有IP地址（IPv6）' }, 14: { v: '弹性公网IP' }, 15: { v: '弹性公网IP线路' }, 16: { v: '标签' }, 17: { v: '带宽ID' }, 18: { v: '带宽 (Mbit/s)' }, 19: { v: '带宽类型' }, 20: { v: '全域弹性公网IP' }, 21: { v: '全域公网带宽ID' }, 22: { v: '全域互联带宽ID' }, 23: { v: '虚拟化类型' }, 24: { v: '虚拟私有云' }, 25: { v: '虚拟私有云 ID' }, 26: { v: '子网名称' }, 27: { v: '子网ID' }, 28: { v: '安全组' }, 29: { v: '安全组ID' }, 30: { v: '计费模式' }, 31: { v: '竞价类型' }, 32: { v: '创建时间' } },
      ...array2object(excelValue)
    },
    range: {
      startRow: 0,
      startColumn: 0,
      endRow: table.length,
      endColumn: 32
    },
  }
}

export const excel2table = (data) => {
  const { cellData } = data;
  
  const result = [];
  
  // 获取所有行号（除了第0行表头）
  const rowKeys = Object.keys(cellData).map(Number).filter(k => k > 0).sort((a, b) => a - b);
  
  // 字段映射关系（列索引 -> 目标字段名）
  const fieldMap = {
    0: 'name',           // 名称
    1: 'id',             // ID
    3: 'availableArea',  // 可用区
    4: 'status',         // 状态
    6: 'spec',           // 规格名称
    // 7: 'cpu',            // vCPUs
    // 8: 'memory',         // 内存(GiB)
    9: 'image',          // 镜像
    10: 'os',            // 操作系统
    12: 'privateIp',     // 私有IP地址（IPv4
    14: 'publicIp',      // 弹性公网IP
    30: 'billingMode',   // 计费模式
    32: 'createTime'     // 创建时间
  };

  for (const rowKey of rowKeys) {
    const row = cellData[rowKey];
    if (!row) continue;

    const item = {};

    for (const [colIndex, fieldName] of Object.entries(fieldMap)) {
      const cell = row[colIndex];
      if (fieldName === 'spec') {
        item[fieldName] = row[7].v + 'vCPUs | ' + row[8].v + 'GiB | ' + row[6].v
      } else {
        item[fieldName] = cell && cell.v !== undefined ? cell.v : null;
      }
    }

    result.push(item);
  }

  return result;
}