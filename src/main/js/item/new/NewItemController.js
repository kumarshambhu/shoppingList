import angular from 'angular';

export class NewItemController {

    /*@ngInject*/
    constructor($mdDialog, newItem) {

        this.newItem = angular.copy(newItem);
        this.$mdDialog = $mdDialog;
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    create() {
        this.$mdDialog.hide(this.newItem);
    }
}