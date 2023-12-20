<?php
if (empty($_GET['className'])) {
    exit;
}
?>
<script type="text/javascript" src="talents/<?php echo $_GET['className']; ?>/variables.js"></script>
<script type="text/javascript" src="talents/<?php echo $_GET['className']; ?>/functions.js"></script>
<script type="text/javascript" src="talents/<?php echo $_GET['className']; ?>/data.js"></script>
<script type="text/javascript" src="talents/common.js"></script>