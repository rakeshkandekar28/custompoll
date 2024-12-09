export function isValidConfig(config) {
  const requiredFields = ['id', 'question', 'totalVotes', 'options'];
  
  return requiredFields.every(field => {
    if (field === 'options') {
      return Array.isArray(config[field]) && config[field].length > 0;
    }
    return config[field] != null;
  });
}

export function isWidgetAlreadyLoaded(configId) {
  const widgetKey = `loaded-${configId}`;
  return Boolean(window[widgetKey]);
}