export class SampleProjectsData {

  static projects = [
    {
      'label': 'Projects',
      'data': 'proj',
      'expandedIcon': 'pi pi-folder-open',
      'collapsedIcon': 'pi pi-folder',
      'selectable': false,
      'children': [
        {
          'label': 'PrimeTime',
          'selectable': false,
          'data': 'primeTime',
          'expandedIcon': 'pi pi-folder-open',
          'collapsedIcon': 'pi pi-folder',
          'children': [
            {'label': 'Frontend', 'icon': 'fas fa-code', 'data': 'fe'},
            {'label': 'Backend', 'icon': 'fa fa-cloud', 'data': 'be'},
            {'label': 'Operations', 'icon': 'fa fa-cogs', 'data': 'ops'}
          ]
        },
        {
          'label': 'Mobile App',
          'data': 'mobile',
          'expandedIcon': 'pi pi-folder-open',
          'collapsedIcon': 'pi pi-folder',
          'selectable': false,
          'children': [
            {'label': 'Frontend', 'icon': 'fas fa-code', 'data': 'fe'},
            {'label': 'Backend', 'icon': 'fa fa-cloud', 'data': 'be'},
            {'label': 'Operations', 'icon': 'fa fa-cogs', 'data': 'ops'}
          ]
        }
      ]
    }
  ]
}
