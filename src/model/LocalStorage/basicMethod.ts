import AsyncStorage from "@react-native-community/async-storage";

type StoreData = {
  value: any;
  key: string;
};

export const storeData = async (props: StoreData) => {
  const { key, value } = props;

  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

type GetData = {
  key: string;
};

export const getData = async (props: GetData) => {
  const { key } = props;
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // error reading value
  }
};

type RemoveOfTargetKey = {
  targetKey: string;
};

export const removeOfTargetKey = async (props: RemoveOfTargetKey) => {
  const { targetKey } = props;

  const res = await AsyncStorage.removeItem(targetKey);
  return res;
};
