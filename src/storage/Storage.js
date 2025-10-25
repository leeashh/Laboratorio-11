import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'historialFotos';
const KEY_ULTIMA = 'ultimaFoto';
const KEY_FECHA = 'fechaFoto';

export const loadHistory = async () => {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
    const ultima = await AsyncStorage.getItem(KEY_ULTIMA);
    const fecha = await AsyncStorage.getItem(KEY_FECHA);
    if (ultima) {
      const arr = [{ uri: ultima, date: fecha || new Date().toLocaleString() }];
      await AsyncStorage.setItem(KEY, JSON.stringify(arr));
      return arr;
    }
    return [];
  } catch (err) {
    console.error('loadHistory error:', err);
    return [];
  }
};

export const saveHistory = async (history) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(history));
  } catch (err) {
    console.error('saveHistory error:', err);
  }
};

export const saveCompat = async (uri, date) => {
  try {
    await AsyncStorage.setItem(KEY_ULTIMA, uri);
    await AsyncStorage.setItem(KEY_FECHA, date);
  } catch (err) {
    console.error('saveCompat error:', err);
  }
};