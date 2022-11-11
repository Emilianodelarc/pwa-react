import React, { useEffect, useState } from "react";
import ListCards from "../components/ListCards";
import Menu from "../components/Menu";
import ReactPaginate from "react-paginate";
function ListaHospital() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 10;


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const OBS = () => {
      fetch("./data/socialWorks.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((dat) => {
          setData(dat)
          setPage(dat.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(dat.length / itemsPerPage));
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
    };

    OBS();
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    setLoading(true)
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(newOffset,page);
    setItemOffset(newOffset);
    setTimeout(() => {
        setLoading(false);
      }, 2000);
  };

  return (
    <>
      <Menu />
      <div className="card-loading1">
        {page && <ListCards datos={page} loading={loading} />}
        <div className="paginacion">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}

export default ListaHospital;
