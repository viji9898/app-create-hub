import { Button, Drawer, Grid, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export const MainMenu = () => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const [current, setCurrent] = useState("retreat");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: (
        <Button
          type="link"
          to="/course"
          style={{ textDecoration: "none" }}
          onClick={onClose}
          href="https://learn.techforgood.lk"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{"Our COURSES "}</strong>
        </Button>
      ),
      key: "link1",
      // children: [
      //   {
      //     key: "introCoding",
      //     label: (
      //       <Link
      //         to="/course"
      //         style={{ textDecoration: "none" }}
      //         onClick={onClose}
      //       >
      //         {"Intro to Coding (Free)"}
      //       </Link>
      //     ),
      //   },
      //   {
      //     key: "fullStack",
      //     label: (
      //       <Link
      //         to="/full-stack"
      //         style={{ textDecoration: "none" }}
      //         onClick={onClose}
      //       >
      //         {"Full Stack Bootcamp"}
      //       </Link>
      //     ),
      //   },
      // ],
    },
    {
      label: (
        <Button
          onClick={onClose}
          href="https://learn.techforgood.lk/admissions"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "black",
            color: "white",
            textDecoration: "none",
          }}
          type="primary"
        >
          <strong>{"ADMISSIONS"}</strong>
        </Button>
      ),
      key: "link2",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      {md ? (
        <div>
          <Menu
            onClick={onClick}
            disabledOverflow={true}
            style={{
              borderBottom: "0px",
            }}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      ) : (
        <div>
          <Button
            type="primary"
            onClick={showDrawer}
            style={{ backgroundColor: "black" }}
          >
            <MenuOutlined style={{ verticalAlign: "middle" }} />
          </Button>
          <Drawer
            zIndex={1030}
            placement={"right"}
            // closable={false}
            width={300}
            onClose={onClose}
            open={open}
            key={"right"}
          >
            <Menu
              onClick={onClick}
              style={{
                justifyContent: "right",
                borderBottom: "0px",
              }}
              selectedKeys={[current]}
              mode="inline"
              items={items}
            />
          </Drawer>
        </div>
      )}
    </div>
  );
};
