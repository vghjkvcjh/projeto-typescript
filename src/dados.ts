import type { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [
    {id: 1, titulo: "Estudar Interfaces", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 2, titulo: "Estudar Arrays", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Estudar Listas", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 4, titulo: "Aprender Cobol", prioridade: "baixa", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 5, titulo: "Jogar na MegaSena", prioridade: "alta", status: "pendente", tags: ["aposta"], criadaEm: new Date()},
]