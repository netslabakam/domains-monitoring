<?php

class customCutimageTask extends sfBaseTask
{
    protected function configure()
    {
        // // add your own arguments here
        // $this->addArguments(array(
        //   new sfCommandArgument('my_arg', sfCommandArgument::REQUIRED, 'My argument'),
        // ));

        $this->addOptions(array(
                new sfCommandOption('application', null, sfCommandOption::PARAMETER_REQUIRED, 'The application name', 'arm'),
                new sfCommandOption('env', null, sfCommandOption::PARAMETER_REQUIRED, 'The environment', 'dev'),
                new sfCommandOption('connection', null, sfCommandOption::PARAMETER_REQUIRED, 'The connection name', 'doctrine')
        ));

        $this->namespace = 'custom';
        $this->name = 'cut-image';
        $this->briefDescription = '';
        $this->detailedDescription = <<<EOF
The [custom:cut-image|INFO] task does things.
Call it with:

  [php symfony custom:cut-image|INFO]
EOF;
    }

    protected function execute($arguments = array(), $options = array())
    {
        // initialize the database connection
        $databaseManager = new sfDatabaseManager($this->configuration);
        $connection = $databaseManager->getDatabase($options['connection'])->getConnection();

        $filename = sfConfig::get('sf_config_dir') . '/image.yml';
        if (file_exists($filename)) {
            $parser = new sfYamlParser();
            $values = $parser->parse(file_get_contents($filename));
            if (isset($values['all']) && count($values['all']) > 0) {
                foreach ($values['all'] as $key => $value) {
                    preg_match('/^([A-Z]{1}[a-zA-Z]*)_(.*)$/u', $key, $matches);
                    if (count($matches) === 3) {
                        $this->log($key);
                        $table = $matches[1];
                        $field = $matches[2];
                        $query = Doctrine_Query::create()
                            ->select("id, " . $field)
                            ->from($table)
                            ->where("char_length(" . $field . ") > 0")
                            ->fetchArray();
                        foreach ($query as $q) {
                            foreach (explode(';', $q[$field]) as $image) {
                                $image = explode(':', $image);
                                Page::uploader(sfConfig::get('sf_upload_dir') . '/f/' . $image[0], $key, 'path', true);
                            }
                        }
                    }
                }
            }
        }
    }
}
