const idade = 0;

console.log(`sua idade: ${idade ?? 'Sem registro'}`);
// if (idade == null || idade == undefined)

// (a ?? b) ignora valores reais durante a análise de valores falsy
// falsy == 0, '', "", false, null, undefinded
// valores verificados pelo nullish operator : null, undefined