# Simple State Management 


## İndirme 
```bash
clone
npm install
```

#### iOS
```bash
cd ios
pod install
cd ..
react-native run-ios
```

#### Android
```bash
react-native run-android
```

## Nasıl Kullanılır?

```bash
App.tsx içerisinde global state initialize edilir.
Local state kullanılmak istenen bölümde local state initialize edilir ve addState metodu ile global state'e eklenir.
İlgili local state kullanılacak component'lere prop olarak geçilir.
State değişiminde yeniden render edilecek componentler için notify prop'u da ilgili component'e eklenir.

```
