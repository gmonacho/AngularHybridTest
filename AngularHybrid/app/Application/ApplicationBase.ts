import { IApplication } from "./IApplication";

    export abstract class ApplicationBase implements IApplication {

        // Public properties
        public module: ng.IModule;

        public constructor() {
        }

        public start(): void {

            console.log('ApplicationBase')
            //console.log(`Démarrage de ${this.name()}`);

            // Création du module
            this.module = angular.module(this.name(), this.moduleDependencies());

            // Registration des composants
            this.registerConstants();
            this.registerFactories();
            this.registerControllers();
            this.registerDirectives();
            this.registerFilters();
            this.registerServices();

            // Configuration du module
            this.module.config(this.moduleConfiguration());

            // Run du module
            this.module.run(this.moduleRun());
        }

        protected abstract name(): string;

        protected abstract moduleDependencies(): string[];

        protected abstract registerFactories(): void;

        protected abstract registerControllers(): void;

        protected abstract registerDirectives(): void;

        protected abstract registerFilters(): void;

        protected abstract registerConstants(): void;

        protected abstract registerServices(): void;

        protected abstract moduleConfiguration(): Array<string | Function>;

        protected abstract moduleRun(): Array<string | Function>;
    }