<?php

namespace TCG\Voyager\Actions;

class ViewAction extends AbstractAction
{
    public function getTitle()
    {
        return __('voyager::generic.view');
    }

    //  nuimamas mygtukas perziureti
    public function shouldActionDisplayOnDataType(){
        return $this->dataType->slug != 'users';
    }

    public function getIcon()
    {
        return 'voyager-eye';
    }

    public function getPolicy()
    {
        return 'read';
    }

    public function getAttributes()
    {
        return [
            'class' => 'btn btn-sm btn-warning pull-right view',
        ];
    }

    public function getDefaultRoute()
    {
        return route('voyager.'.$this->dataType->slug.'.show', $this->data->{$this->data->getKeyName()});
    }
}
