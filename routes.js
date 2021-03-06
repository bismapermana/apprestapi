"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuamahasiswa);

  app.route("/tampil/:id").get(jsonku.tampilsemuamahasiswaid);

  app.route("/tambah").post(jsonku.tambahmahasiswa);

  app.route("/ubah").put(jsonku.ubahmahasiswa);

  app.route("/hapus").delete(jsonku.hapusmahasiswa);
};
